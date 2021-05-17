import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {Observable, of, Subject} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    switchMap,
    takeUntil
} from 'rxjs/operators';
import {NgSelectComponent} from '@ng-select/ng-select';
import {MatDialog} from '@angular/material/dialog';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
    selector: 'formly-field-typeahead',
    template: `
    <div fxLayout="row wrap">
        <ng-select [appearance]="to.appearance" fxFlex="0 1 auto" #ngselect [items]="options$ | async"
               [placeholder]="to.placeholder"
               [typeahead]="search$"
               [bindLabel]="to.bindLabel"
               [hideSelected]="true"
               [minTermLength]="2"
               [multiple]="to.multiple ? to.multiple: false"
               [bindValue]="to.bindValue" [formControl]="formControl">
            <ng-template ng-notfound-tmp let-searchTerm="searchTerm">
                <div class="ng-option">
                    <span (click)="openDialog()">No data found for "{{searchTerm}}", click to add new</span>
                </div>
            </ng-template>
        </ng-select>
<!--        <div fxFlex="0 1 auto">-->
<!--            <button mat-button type="button" (click)="openDialog()">add new</button>-->
<!--        </div>-->
    </div>
  `,
    styleUrls: ['./typehead.type.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class FormlyFieldTypeaheadComponent extends FieldType implements OnDestroy, OnInit, AfterViewInit {
    onDestroy$ = new Subject<void>();
    search$ = new Subject();
    options$;
    getIntialList =  false;
    currentOptions =  [];

    @ViewChild('ngselect') ngselect: NgSelectComponent;

    _filter;

    constructor(public dialog: MatDialog, private baseService: BaseService) {
        super();
    }

    ngOnInit() {
      this.getIntialList = this.to.getIntialList ?? false;

      this._filter = (value: any): Observable<any> => {
          if (value === '' && !this.to.getIntialList) { return this.to.currentOptions ?? of(null); }
          else {
            const finalQuery = {...this.to.defaultFilter, perPage: 50000};
            if (value !== '') { finalQuery[this.to.searchVariable] = value; }

            return this.baseService.getList(finalQuery, this.to.optionsResource).pipe(
              // startWith(this.currentOptions),
              // map the item property of the github results as our return object
              map((results: any) => {
                const options = this.currentOptions.concat(results.data);
                if (typeof this.key === 'string' ) {
                  this.field.options.formState[this.key] = options;
                }
                return options;
              }),
              // catch errors
              catchError(_ => {
                return of(null);
              })
            );
          }
        };

      this.options$ = this.search$.pipe(
            takeUntil(this.onDestroy$),
            startWith(''),
            filter(v => v !== null),
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(this._filter),
        );

      this.options$.subscribe();

      this.to.currentOptions?.subscribe(value => {
          this.currentOptions = value;
        });

    }

    ngAfterViewInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(this.to.addDialogue, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result){
                this.ngselect.select(result);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.complete();
    }



}

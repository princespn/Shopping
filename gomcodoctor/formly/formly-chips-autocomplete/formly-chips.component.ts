import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import {Observable, of, Subject} from 'rxjs';
import {startWith, map, takeUntil, debounceTime, switchMap, catchError} from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
    templateUrl: './formly-chips.component.html',
    styles: [`
    .chip-list {
      width: 100%;
    }
  `]
})
export class FormlyChipsComponent extends FieldType implements OnInit, OnDestroy, AfterViewInit {
    onDestroy$ = new Subject<void>();

    itemControl = new FormControl();
    selectable = true;
    removable = true;
    addOnBlur = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    visible = true;

    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    filter: Observable<any[]>;

    displayFn = (object): string => {
        return object && object[this.to.optionsLabel] ? object[this.to.optionsLabel] : '';
    }

    ngOnInit() {
        super.ngOnInit();

        this.filter = this.itemControl.valueChanges.pipe(
            startWith(''),
            // delay emits
            takeUntil(this.onDestroy$),
            debounceTime(1000),
            // use switch map so as to cancel previous subscribed events, before creating new once
            switchMap(value => {
                if (value !== '') {
                    // lookup from github
                    return this._filter(value);
                } else {
                    // if no value is present, return null
                    return of(null);
                }
            })
        );

        // this.filter = this.itemControl.valueChanges.pipe(
        //     takeUntil(this.onDestroy$),
        //     startWith(null),
        //     map((item: any | null) => item ? this._filter(item) : this._filter(''))
        // );
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        // temporary fix for https://github.com/angular/material2/issues/6728
        (this.matAutocomplete as any)._formField = this.formField;
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // get empty() { return this.formControl.value.length === 0; }

    public add(event: MatChipInputEvent): void {
        // Add item only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            // const value = event.value;
            // // Add item
            // if ((value || '').trim()) {
            //     this.formControl.setValue([
            //         ...this.formControl.value,
            //         value.trim(),
            //     ]);
            // }

            // Reset the input value
            if (input) {
                input.value = '';
            }

            this.itemControl.setValue(null);
        }
    }

    public selected(event: MatAutocompleteSelectedEvent): void {
        console.log(this.to);
        this.formControl.setValue([
            ...this.formControl.value,
            event.option.value,
        ]);

        this.itemControl.setValue(null);
    }

    public remove(i: number): void {
        const value = this.formControl.value;

        this.formControl.setValue([
            ...value.slice(0, i),
            ...value.slice(i + 1, value.length)
        ]);
        this.formControl.markAsTouched();
    }

    _filter(value: any): Observable<any> {
        return this.to.optionsService.getList({query: value, perPage: 5}).pipe(
            // map the item property of the github results as our return object
            map((results: any) => results.data),
            // catch errors
            catchError(_ => {
                return of(null);
            })
        );
    }

    // private _filter(value: any): any[] {
    //     if (!this.to.filter) { return []; }
    //     if (!value) { return this.to.filter.slice(); }
    //
    //     const filterValue = value.toLowerCase();
    //
    //     return this.to.filter.filter(
    //         item => item.toLowerCase().indexOf(filterValue) === 0
    //     );
    // }

    onBlur() {
        this.formControl.markAsTouched();
        this.field.focus = false;
    }

}

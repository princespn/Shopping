import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isEmpty, cloneDeep} from 'lodash';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MetaService} from '@ngx-meta/core';

@Component({
  selector: 'gomco-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FormlyFormComponent implements OnInit {

  loading = false;

  @Input() options: FormlyFormOptions;
  @Input() updateOnSubmit = false;
  @Input() multipart = false;
  @Input() scrollable = false;
  @Input() model: any = {};
  @Input() form = new FormGroup({});
  @Input() fields: FormlyFieldConfig[];
  @Input() service: BaseService;
  @Input() method;
  @Input() submitCallback;
  @Input() redirect;
  @Input() redirectPath;
  @Input() redirectToPreviousPage;
  @Input() modelModifier;
  @Input() modelModifierBeforeCall;
  @Input() successCallback;
  @Input() label = 'Save';
  @Input() buttonWidth = '';
  @Input() resource = null;
  @Input() param: any = {};
  @Input() update = false;
  @Input() debug = false;
  @Input() snackbar = true;
  @Input() reset = true;
  @Input() captcha = false;
  @Input() showButton = true;
  @Input() wrapButton = true;
  @Input() buttonTemplate;
  @Input() stepper;
  @Input() dialogRef: MatDialogRef<any>;
  @Input() skipStep = false;
  @Input() formlyFxFlex = '1 0 auto';
  @Input() fxLayoutDir = 'column';
  @Input() fxLayoutGapForm = '';
  @Input() fxLayoutAlignForm = '';
  @Input() color = 'primary';
  @Input() formClass = 'max-w-md';
  @Input() formHeight = '';
  @Input() successMessage;
  @Input() successMessageInline;
  @Input() metaTitle;
  @Input() metaTitlePattern;
  @Input() metaTitleField;
  @Input() showDeleteButton = true;
  @Output() successful: EventEmitter<any> = new EventEmitter();
  @Input() subscribeRoute = true;
  @Output() deleted: EventEmitter<any> = new EventEmitter();


  private previousData;
  dataLoading = false;
  isSuccessFull = false;

  constructor(private baseService: BaseService,
              private snackBarCustomService: SnackBarCustomService, private navigationService: NavigationService,
              protected readonly meta: MetaService, protected _route: ActivatedRoute){
  }

  ngOnInit() {
    if (this.subscribeRoute){
      this._route.params.subscribe((queryParams) => {
        this.param = queryParams;
        this.update = !isEmpty(queryParams);
        if (this.update && isEmpty(this.model)){
          this.getData();
        }
        else if (!isEmpty(this.model) ) { this.handleModel(); }
      });
    }
    else if (this.update && isEmpty(this.model)){
      this.getData();
    }
    else if (!isEmpty(this.model)){
      this.handleModel();
    }


    if (!this.options) { this.options = {}; }

    if (this.metaTitle)  { this.meta.setTitle(`${this.metaTitle}`); }
  }

  protected getData() {
    this.dataLoading = true;
    this.baseService.getOne(this.param, this.resource).subscribe(
      (response) => {
          this.model = response;
          this.handleModel();
          this.dataLoading = false;
        },
      error => {
        this.dataLoading = false;
      });
  }

  private handleModel(){
    if (this.modelModifier) {
      this.model = cloneDeep(this.model);
      this.modelModifier(this.model, this.param);
    }
    this.previousData = cloneDeep(this.model);
    if (this.metaTitlePattern && this.model[this.metaTitleField])
    { this.meta.setTitle(`${this.metaTitlePattern.replace(':key', this.model[this.metaTitleField])}`); }
  }

  submitWithCaptcha(event){
    this.model.captcha = event;
    this.submit();
  }

  submitCall = () => this.submit();
  submit() {
    if (this.form.valid){
      if (this.submitCallback) {
        this.submitCallback(this.model);
        if (this.dialogRef) { this.dialogRef.close(); }
      }
      else {
        let method;
        if (this.method) {
          method = this.method;
        } else if (this.update) {
          method = 'update';
        } else {
          method = 'post';
        }
        const finalModel = this.modelModifierBeforeCall ? this.modelModifierBeforeCall(this.model, this.param) : this.model;

        if (this.debug) {
          console.log(finalModel);
          return;
        }

        this.loading = true;
        this.isSuccessFull = false;
        // tslint:disable-next-line:max-line-length
        this.baseService[method](finalModel, this.resource, {...this.param, previousData: this.previousData}, {}, this.multipart).subscribe({
          next: (response) => {
            this.isSuccessFull = true;
            this.successful.emit(response);
            if (this.successCallback) {
              this.successCallback(response);
            }

            if (this.snackbar){
              if (!this.successMessage) { this.successMessage = this.resource + '.' + method + '.' + 'success'; }
              this.snackBarCustomService.openSnackBar(this.successMessage);
            }

            if (this.redirect) {
              // {queryParams: {registered: true}
              this.navigationService.navigateByRouteName(this.redirect, response );
            }

            if (this.redirectPath) {
              this.navigationService.navigateByPath(this.redirectPath, {} );
            }

            if (this.redirectToPreviousPage){
              this.navigationService.back(this.redirectToPreviousPage);
            }

            this.loading = false;
            if (this.reset) { this.options?.resetModel(); }
            // if (this.reset) { this.form.reset(); }
            if (this.stepper) { this.stepper.next(); }
            if (this.dialogRef) { this.dialogRef.close(); }
          },
          error: err => {
            // this.snackBarCustomService.openSnackBar('Error');
            this.loading = false;
            this.isSuccessFull = false;
          }
        });
      }
    }
  }
}

import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {Router} from '@angular/router';
import {isEmpty, cloneDeep} from 'lodash';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';

@Component({
  selector: 'gomco-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FormlyFormComponent implements OnInit {

  loading = false;

  options: FormlyFormOptions = {};

  @Input() updateOnSubmit = false;
  @Input() multipart = false;
  @Input() model: any = {};
  @Input() form = new FormGroup({});
  @Input() fields: FormlyFieldConfig[];
  @Input() service: BaseService;
  @Input() method;
  @Input() submitCallback;
  @Input() redirect;
  @Input() modelModifier;
  @Input() modelModifierBeforeCall;
  @Input() successCallback;
  @Input() label = 'Save';
  @Input() resource = null;
  @Input() param = {};
  @Input() update = false;
  @Input() debug = false;
  @Input() snackbar = true;
  @Input() reset = true;
  @Input() captcha = false;
  @Input() showButton = true;
  @Input() wrapButton = true;
  @Input() buttonTemplate;
  @Input() stepper;
  @Input() skipStep = false;
  @Input() formlyFxFlex = '1 0 auto';
  @Input() fxLayoutDir = 'column';
  @Input() fxLayoutGapForm = '';
  @Input() fxLayoutAlignForm = '';
  @Input() color = 'primary';
  @Input() formClass = 'max-w-md';

  private previousData;

  dataLoading = false;

  constructor(private baseService: BaseService, private router: Router, private namedRoutesService: NamedRoutesService,
              private snackBarCustomService: SnackBarCustomService){
  }

  ngOnInit() {
    if (this.update && isEmpty(this.model)){
      this.getData();
    }
    else if (this.modelModifier) { this.modelModifier(this.model); }
  }

  protected getData() {
    this.dataLoading = true;
    this.baseService.getOne(this.param, this.resource).subscribe(
      (response) => {
        if (this.modelModifier) { this.modelModifier(response); }
        this.previousData = cloneDeep(response);
        this.model = response;
        this.dataLoading = false;
        },
      error => {
        this.dataLoading = false;
      });
  }

  submitWithCaptcha(event){
    this.model.captcha = event;
    this.submit();
  }

  submitCall = () => this.submit();

  submit() {
    if (this.form.valid){
      if (this.submitCallback) { this.submitCallback(this.model); }
      else {
        let method;
        if (this.method) {
          method = this.method;
        } else if (this.update) {
          method = 'update';
        } else {
          method = 'post';
        }
        const finalModel = this.modelModifierBeforeCall ? this.modelModifierBeforeCall(this.model) : this.model;

        if (this.debug) {
          console.log(finalModel);
          return;
        }

        this.loading = true;

        this.baseService[method](finalModel, this.resource, {...this.param, previousData: this.previousData}, {}, this.multipart).subscribe({
          next: (response) => {
            if (this.successCallback) {
              this.successCallback(response);
            }

            if (this.snackbar){
              this.snackBarCustomService.openSnackBar('Done');
            }

            if (this.redirect) {
              this.router.navigate([this.namedRoutesService.getRoute(this.redirect)], {queryParams: {registered: true}});
            }
            this.loading = false;
            if (this.reset) { this.options.resetModel(); }
            // if (this.reset) { this.form.reset(); }
            if (this.stepper) { this.stepper.next(); }
          },
          error: err => {
            // this.snackBarCustomService.openSnackBar('Error');
            this.loading = false;
          }
        });
      }
    }
  }
}

import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  forwardRef,
  OnInit, Renderer2, Injector
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'inline-input-edit',
  templateUrl: './inline-input-edit.component.html',
  styleUrls: ['./inline-input-edit.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InlineInputEditComponent),
      multi: true
    }
  ]
})
export class InlineInputEditComponent implements ControlValueAccessor, OnInit {

  /** input control **/
  @ViewChild('inlineEditControl') inlineEditControl: ElementRef;

  /** The control label **/
  @Input() label = '';
  /** Type of input control **/
  @Input() type;

  @Input() value;
  /** Input value required **/
  @Input() required = false;
  /** Input control is disabled **/
  @Input() disabled = false;
  // Prefix the value
  @Input() prefix: any;
  // color of the confirm button
  @Input() confirmColor = 'primary';
  // color of the cancel button
  @Input() cancelColor = 'warn';

  @Input() changed;

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  @Input()
  processing = false;

  @Input()
  success = false;

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private injector: Injector, element: ElementRef, private _renderer: Renderer2) {
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  private preValue = '';

  public editing = false;

  /** Callback when the value is changing **/
  public onChange: any = Function.prototype;
  /** Callback when the input is accessed **/
  public onTouched: any = Function.prototype;

  // onInputChange() {
  //   const value = this.inlineEditControl.nativeElement.value;
  //   this.onChange(value);
  // }

  cancel($event: Event) {
    // console.log(this.preValue);
    this.inlineEditControl.nativeElement.value = this.preValue;
    this.editing = false;
    this.success = false;
  }

  confirm($event: Event) {
    this.editing = false;
    // this.preValue = this.control.value;
    this.changed($event);
  }

  keypress($event) {
    if ($event.keyCode === 13) {
      this.confirm($event);
    }
  }

  // Start editing
  edit() {
    if (this.disabled) {
      return;
    }

    this.preValue = this.control.value;
    this.editing = true;
    // Set focus on the input element, but we need to give it one cycle so it is ready
    // setTimeout(_ => this.inlineEditControl.nativeElement.focus());
  }

  ngOnInit() {
    // this.formControl = new FormControl(this.value);
  }

}

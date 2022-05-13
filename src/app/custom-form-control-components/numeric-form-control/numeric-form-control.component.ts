import {
  Component,
  forwardRef,
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NumericFormControl } from '../../custom-form-controls/numeric-form-control/numeric-form-control';

@Component({
  selector: 'app-numeric-form-control',
  templateUrl: './numeric-form-control.component.html',
  styleUrls: ['./numeric-form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericFormControlComponent),
      multi: true,
    },
  ],
})
export class NumericFormControlComponent
  implements OnInit, ControlValueAccessor
{
  @Input() label?: string;
  @Input() formControlName!: string;

  private onChangeFn: Function = () => {};
  private onTouchedFn: Function = () => {};

  public numericFormControl!: NumericFormControl;
  public disabled = false;

  get valid(): boolean {
    return this.numericFormControl ? this.numericFormControl.valid : false;
  }

  get invalid(): boolean {
    return !this.valid;
  }

  get labelAvailable(): boolean {
    return !!this.label;
  }

  get required(): boolean {
    return this.numericFormControl.required;
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit() {
    this.numericFormControl = <NumericFormControl>(
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  writeValue(value: number): void {
    this.numericFormControl.setValue(value);
  }

  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;

    if (this.disabled) {
      this.numericFormControl.disable();
    } else {
      this.numericFormControl.enable();
    }
  }

  doInput(): void {
    this.onChangeFn(this.numericFormControl.value);
  }

  doBlur(): void {
    this.onTouchedFn();
  }
}

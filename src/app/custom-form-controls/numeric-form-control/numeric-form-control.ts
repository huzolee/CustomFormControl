import {
  AbstractControlOptions,
  AsyncValidatorFn,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { StrictFormControl } from '../strict-form-control/strict-form-control';

export class NumericFormControl extends StrictFormControl<number> {
  get required(): boolean {
    return this.hasValidator(Validators.required);
  }

  override get valid(): boolean {
    const isNumber: boolean = typeof this.value === 'number';

    return this.required
      ? !this.touched || (super.valid && isNumber)
      : !!this.value && super.valid && isNumber;
  }

  override get invalid(): boolean {
    return !this.valid;
  }

  constructor(
    formState?: number,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }
}

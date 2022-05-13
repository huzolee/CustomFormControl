import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

export class StrictFormControl<T> extends FormControl {
  constructor(
    formState?: T,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  override setValue(
    value: T,
    options?: {
      onlySelf?: boolean | undefined;
      emitEvent?: boolean | undefined;
      emitModelToViewChange?: boolean | undefined;
      emitViewToModelChange?: boolean | undefined;
    }
  ): void {
    super.setValue(value, options);
  }

  override patchValue(
    value: T,
    options?: {
      onlySelf?: boolean | undefined;
      emitEvent?: boolean | undefined;
      emitModelToViewChange?: boolean | undefined;
      emitViewToModelChange?: boolean | undefined;
    }
  ): void {
    super.patchValue(value, options);
  }

  override reset(
    formState?: T,
    options?: {
      onlySelf?: boolean | undefined;
      emitEvent?: boolean | undefined;
    }
  ): void {
    super.reset(formState, options);
  }

  override registerOnChange(fn: Function): void {
    super.registerOnChange(fn);
  }

  override registerOnDisabledChange(fn: (isDisabled: boolean) => void): void {
    super.registerOnDisabledChange(fn);
  }
}

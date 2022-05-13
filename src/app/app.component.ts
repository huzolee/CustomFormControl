import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NumericFormControl } from './custom-form-controls/numeric-form-control/numeric-form-control';
import { FormControlName } from './form-control-name.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  FormControlName = FormControlName;

  ngOnInit(): void {
    this.form = new FormGroup({
      [FormControlName.MY_NUMERIC_FORM_CONTROL]: new NumericFormControl(
        undefined,
        Validators.required
      ),
    });
  }

  formSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log('form value', this.form.value);
    } else {
      console.log('form is not valid');
    }
  }
}

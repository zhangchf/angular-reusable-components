import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { PasswordValidators } from '../validators/password.validators';
import { fbind } from 'q';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]/*, PasswordValidators.correctPassword*/),
    newPassword: new FormControl('', [
      Validators.required
    ]),
    confirmPassword: new FormControl('Input your new password again', [
      Validators.required
    ]),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      newPassword: ['', Validators.required], // or use fb.control()
      confirmPassword: []
    })
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onEnterOldPassword() {
    console.log(this.oldPassword);
    this.oldPassword.markAsPending();
    PasswordValidators.correctPassword(this.oldPassword)
      .then((validationErrors) => {
        if (validationErrors != null) {
          this.oldPassword.setErrors(validationErrors);
        }
      })
  }

  submit(formValue) {
    console.log(formValue);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
const errorAndMessageMap = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minlength: 'This field need to satisfy the minimum length',
  maxlength: 'This field need to satisfy the maximum length',
  min: 'This field need to satisfy the minimum value',
  max: 'This field need to satisfy the maximum value',
  pattern: 'This field need to satisfy the pattern',
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() control: FormControl | AbstractControl;
  @Input() inputType: string;
  @Input() inputLabel: string;
  @Input() required: boolean;
  @Input() radioOption: string;
  @Input() touched: boolean;
  @Input() notMinLength: boolean;
  @Input() crossMaxLength: boolean;
  @Input() isMail: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(controlErrors: ValidationErrors) {
    const errors = Object.keys(controlErrors);
    if (errors.length === 0) {
      return '';
    }

    return this.fullErrorMessage(errors);
  }

  private fullErrorMessage(errors: string[]) {
    let errorMessage = '';
    errors.forEach(error => {
      errorMessage += errorAndMessageMap[error] + ' ';
    });

    return errorMessage;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import {DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() inputLabel: string;
  @Input() required: boolean
  @Input() control: FormControl | AbstractControl;
  @Input() id: number;
  selectedFiles: any[];
  fileId = Math.floor(Math.random() * 100000);
  @Output() files = new EventEmitter<any[]>();
  @Input() isAllowMultiple: boolean;
  imageURL: SafeUrl;
  @Input() types: string;

  constructor(
      private sanitizer: DomSanitizer
  ) {
  }


  ngOnInit(): void {
    this.selectedFiles = [];
  }

  onFileSelection($event: any): void {
    const files: File[] = Array.from($event.target.files);
    files.forEach(file => {
      // @ts-ignore
      file.src = this.getImageUrl(file);
    });

    this.control.setValue(this.isAllowMultiple ? files : files[0]);

    console.log(this.control.value);
  }

  getImageUrl(imageFile: File): SafeUrl {
    const filePath = URL.createObjectURL(imageFile);
    return this.sanitizer.bypassSecurityTrustUrl(filePath);
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

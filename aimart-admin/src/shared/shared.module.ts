import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file/file.component';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        FileComponent,
        InputComponent
    ],
    exports: [
        FileComponent,
        InputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }

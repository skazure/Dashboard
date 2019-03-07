import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModelComponent } from './modals/success-model/success-model.component';
import { DatepickerDirective } from './datepicker.directive';

 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ErrorModalComponent,
  SuccessModelComponent,DatepickerDirective],
  exports: [ErrorModalComponent,DatepickerDirective]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  declarations: [],
  exports: [
    NgMultiSelectDropDownModule,
    ToastrModule
  ]
})
export class SharedModule { }

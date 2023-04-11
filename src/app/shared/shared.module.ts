import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalRef,ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    BsDatepickerModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        tapToDismiss: true,
        positionClass: 'toast-bottom-right'
      }
    )
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    ModalModule,
    NgScrollbarModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    BsDatepickerModule,
    ToastrModule
  ],
  providers: [
    BsModalRef
  ]
})
export class SharedModule { }

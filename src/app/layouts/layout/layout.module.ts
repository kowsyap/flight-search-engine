import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { PagesModule } from 'src/app/common/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent,HeaderComponent,FooterComponent]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { PlusMinusComponent } from './plus-minus/plus-minus.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [TextComponent,DatePickerComponent,PlusMinusComponent,FlightCardComponent,FlightsComponent],
  exports: [TextComponent,DatePickerComponent,PlusMinusComponent,FlightCardComponent,FlightsComponent]
})
export class ComponentsModule { }

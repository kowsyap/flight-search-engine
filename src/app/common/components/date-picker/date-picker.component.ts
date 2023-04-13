import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() reqObj: any;
  @Input() actionsTemplate!: TemplateRef<any>;

  @Output('callBack') callBack:EventEmitter<any> = new EventEmitter();

  datePickerConfig!: Partial<BsDatepickerConfig>;

  constructor() {
  }

  ngOnInit() {
    let obj: any = { containerClass: 'theme-dark-blue', isAnimated: true};
    obj.dateInputFormat= this.reqObj?.['dateFormat']?this.reqObj['dateFormat']:'YYYY-MM-DD';
    console.log(this.reqObj)
    this.datePickerConfig = Object.assign({}, obj);
  }

  onCallback(e:any){
    this.callBack.emit({value: e});
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() reqObj: any;
  @Output('callBack') callBack:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCallback(e:any){
    this.callBack.emit({value: e?.target?.value});
  }

}

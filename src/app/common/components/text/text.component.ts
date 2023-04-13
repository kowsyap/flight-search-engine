import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() reqObj: any;
  @Input() actionsTemplate!: TemplateRef<any>;
  @Output('callBack') callBack:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCallback(e:any){
    /* if(this.reqObj['type']==='number' && (this.reqObj['min']||this.reqObj['max'])){
      if(e?.target?.value<this.reqObj['min'] || e?.target?.value>this.reqObj['max']){
        console.log('pk')
        e.preventDefault();
      }
    } */
    this.callBack.emit({value: e?.target?.value});
  }

}

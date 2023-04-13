import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faPlusCircle,faMinusCircle,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss']
})
export class PlusMinusComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() reqObj: any;
  @Output('callBack') callBack:EventEmitter<any> = new EventEmitter();

  faPlus=faPlusCircle;
  faMinus=faMinusCircle;
  fff=faArrowRightArrowLeft;

  constructor() { }
  
  ngOnInit() {
  }
  
  handleMinus() {
    if(this.checkVal('minus'))
      this.callBack.emit('minus');
  }
  handlePlus() {
    if(this.checkVal('plus'))
    this.callBack.emit('plus');
  }

  getValue(e:any){
    //this.callBack.emit({value: e.value})
    console.log(e,this.parentForm,this.parentForm.value?.[this.reqObj['formControl']])
  }

  checkVal(type:any){
    let value = this.parentForm.value?.[this.reqObj['formControl']];
    if(type==='plus'){
      return value>=this.reqObj['max'] ? false:true;
    } else{
      return value<=this.reqObj['min'] ? false:true;
    }
  }
}

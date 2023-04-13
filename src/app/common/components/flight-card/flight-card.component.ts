import { Component, Input, OnInit } from '@angular/core';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import config from 'src/app/shared/config';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() data: any;
  faIndianRupee=faIndianRupeeSign;
  airlineList=config.airlinesList;
  
  constructor(private utils:UtilsService) { }

  ngOnInit() {
  }

  convHr(val:string){
    if(!val) return 'N/A';
    else{
      let [hh,mm,ss]=val.split(':');
      let min = parseInt(mm)>0?mm+' min':'';
      return hh+' hr '+min;
    }
  }

  formatAMPM(time:string) {
    var [hours,minutes,secs] = time.split(':');
    let hrs = parseInt(hours);
    let min:any = parseInt(minutes);
    var ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // the hour '0' should be '12'
    min = min < 10 ? '0'+min : min;
    var strTime = hrs + ':' + min + ' ' + ampm;
    return strTime;
  }

  timeToMins(time:string) {
    var b:any = time.split(':');
    return b[0]*60 + +b[1];
  }
  
  timeFromMins(mins:any) {
    let z = (n:any)=>{return (n<10? '0':'') + n;}
    var h = (mins/60 |0) % 24;
    var m = mins % 60;
    return z(h) + ':' + z(m) + ':00';
  }
  
  addTimes(t0:string, t1:string) {
    return this.timeFromMins(this.timeToMins(t0) + this.timeToMins(t1));
  }

  
  getValFromKey(arr:any,key:any,val:any,valKey?:any){
    this.utils.getValFromKey(arr,key,val,valKey);
  }

}

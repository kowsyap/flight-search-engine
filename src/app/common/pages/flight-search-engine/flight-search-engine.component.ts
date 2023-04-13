import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCircleNotch,faLocationDot,faArrowRightArrowLeft,faArrowRight,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import config from 'src/app/shared/config';

@Component({
  selector: 'app-flight-search-engine',
  templateUrl: './flight-search-engine.component.html',
  styleUrls: ['./flight-search-engine.component.css']
})
export class FlightSearchEngineComponent implements OnInit {

  searchForm!: FormGroup;
  origin=faCircleNotch;
  destination=faLocationDot;
  rightarrow=faArrowRight;
  rightleftarrow=faArrowRightArrowLeft;
  calender=faCalendarDays;
  dropdownSettings:IDropdownSettings={};
  today = new Date();
  monthAfter = new Date(moment(this.today).add(1, 'month').toISOString());
  airlinesList = config.airlinesList;
  citiesList = config.citiesList;
  flightsList = config.flightList;
  filteredList:any=[];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'code',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    let stationData = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')||''):{};
    this.formValidations(stationData);
    this.filteredList=[];
  }

  get f() {
    return this.searchForm.controls;
  }

  formValidations(obj?:any){
    this.searchForm = this.fb.group({
      passengers: [1,Validators.required],
      origin: [obj && obj?.origin ? obj.origin:null,Validators.required],
      destination: [obj && obj?.destination ? obj.destination:null,Validators.required],
      start_date: [null,Validators.required],
      airlines: [null,Validators.required],
    })
  }

  getPassengerFn(e:any){
    let passengers = this.searchForm.get('passengers')?.value;
    if(e==='plus') this.searchForm.get('passengers')?.setValue(++passengers);
    else this.searchForm.get('passengers')?.setValue(--passengers);
  }

  onItemSelect(e:any){
    console.log(e);
  }
  onSelectAll(e:any){
    console.log(e);
  }

  submit(){
    this.searchForm.markAllAsTouched();
    if(this.searchForm.valid){
      this.filterFlights();
    }
  }
  exchange(){
    let to=this.searchForm.get('origin')?.value;
    let from=this.searchForm.get('destination')?.value;
    console.log(to,from)
    if(to && from){
      this.searchForm.get('destination')?.setValue(to);
      this.searchForm.get('origin')?.setValue(from);
    }
  }
  filterFlights(){
    let passengers=parseInt(this.searchForm.get('passengers')?.value);
    let to=this.searchForm.get('origin')?.value;
    let from=this.searchForm.get('destination')?.value;
    let airlines=this.searchForm.get('airlines')?.value.map((obj:any)=>obj.code);
    let travel_date=moment(new Date(this.searchForm.get('start_date')?.value)).format('YYYY-MM-DD');
    let tofroFiltered = this.flightsList.filter((obj:any)=>{
      return (obj.originStnCity===to 
        && obj.destinationStnCity===from 
        && airlines.includes(obj.flightOperatedBy)
        && obj.departureDate===travel_date)
      });
    let mappedData = tofroFiltered.map((obj:any)=>{return {...obj,'cost':passengers*obj.cost}});
    this.filteredList = mappedData;
    console.log(this.filteredList,travel_date,passengers,airlines)
  }
}

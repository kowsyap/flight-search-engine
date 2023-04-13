import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCircleNotch,faLocationDot,faArrowRightArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import config from 'src/app/shared/config';
import { paths } from 'src/app/shared/route-paths';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  searchForm!: FormGroup;
  origin=faCircleNotch;
  destination=faLocationDot;
  rightarrow=faArrowRight;
  citiesList = config.citiesList;

  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit() {
    this.formValidations();
  }

  formValidations(){
    this.searchForm = this.fb.group({
      origin: [null,Validators.required],
      destination: [null,Validators.required],
    })
  }

  submit(){
    this.searchForm.markAllAsTouched();
    if(this.searchForm.valid){
      localStorage.setItem('locations',JSON.stringify(this.searchForm.value));
      this.router.navigateByUrl(paths['flightSearchEngine']);
    }
  }

  get f() {
    return this.searchForm.controls;
  }
}

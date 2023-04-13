import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCircleNotch,faLocationDot,faArrowRightArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import config from 'src/app/shared/config';
import { paths } from 'src/app/shared/route-paths';
import { UtilsService } from 'src/app/shared/services/utils.service';

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

  constructor(private fb: FormBuilder,private router: Router,private utils: UtilsService,private toastr: ToastrService) { }

  ngOnInit() {
    this.formValidations();
    this.utils.getPosition().then(pos=>
      {
        //console.log(`Position: ${pos.lng} ${pos.lat}`);
        let nearest:any = [...this.citiesList];
        nearest = nearest.map((obj:any)=>{
          return {code: obj.code,distance:this.utils.distance(pos.lat,pos.lng,obj.latitude,obj.longitude)};
        }).reduce((prev:any, curr:any) => prev.distance < curr.distance ? prev : curr);
        if(nearest && nearest.code){
          this.searchForm.get('origin')?.setValue(nearest.code);
          this.toastr.success('Nearest Airport location has been autoset');
        } 
      });
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

  getValFromKey(arr:any,key:any,val:any,valKey?:any){
    this.utils.getValFromKey(arr,key,val,valKey);
  }
}

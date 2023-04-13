import { Component, Input, OnInit } from '@angular/core';
import {faPlaneSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  @Input() flights:any;
  @Input() isLoaded:any;
  plane=faPlaneSlash;
  constructor() { }

  ngOnInit() {
  }

}

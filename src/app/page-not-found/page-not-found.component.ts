import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paths } from '../shared/route-paths';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public paths: any = paths;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  routeTo(path:string){
    let route = this.paths[path] ? this.paths[path] : this.paths['home'];
    this.router.navigateByUrl(route)
  }

}

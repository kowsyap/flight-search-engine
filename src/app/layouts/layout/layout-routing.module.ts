import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { screens } from 'src/app/shared/route-paths';
import { FlightSearchComponent } from 'src/app/common/pages/flight-search/flight-search.component';
import { FlightSearchEngineComponent } from 'src/app/common/pages/flight-search-engine/flight-search-engine.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: screens['flightSearch'].routePath,
        pathMatch: 'full',
      },
      {
        path: screens['flightSearch'].routePath,
        component: FlightSearchComponent,
        data: screens['flightSearch']
      },
      {
        path: screens['flightSearchEngine'].routePath,
        component: FlightSearchEngineComponent,
        data: screens['flightSearchEngine']
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

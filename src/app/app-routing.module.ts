import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { PeopleComponent } from './people/people.component';
import { PasstimesComponent } from './passtimes/passtimes.component';


const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'passtimes', component: PasstimesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

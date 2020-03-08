import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PeopleComponent } from './people/people.component';
import { PasstimesComponent } from './passtimes/passtimes.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PeopleComponent,
    PasstimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

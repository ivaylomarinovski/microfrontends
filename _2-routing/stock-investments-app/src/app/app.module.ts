import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import { StandardAndPoorsComponent } from './standard-and-poors/standard-and-poors.component';
import { DowJonesComponent } from './dow-jones/dow-jones.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    StandardAndPoorsComponent,
    DowJonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

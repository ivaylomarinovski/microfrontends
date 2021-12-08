import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from "@angular/common";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {StandardAndPoorsComponent} from "./standard-and-poors/standard-and-poors.component";
import {DowJonesComponent} from "./dow-jones/dow-jones.component";

const routes: Routes = [
  { path: 'sp-500', component: StandardAndPoorsComponent },
  { path: 'dow-jones', component: DowJonesComponent },
  { path: '', redirectTo: 'sp-500', pathMatch: 'full'},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/stocks' }]
})
export class AppRoutingModule { }

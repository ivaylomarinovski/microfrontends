import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from "@angular/common";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {InvestmentsComponent} from "./investments/investments.component";

const routes: Routes = [
  { path: 'investments', component: InvestmentsComponent},
  { path: '', redirectTo: 'investments', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/crypto' }]
})
export class AppRoutingModule { }

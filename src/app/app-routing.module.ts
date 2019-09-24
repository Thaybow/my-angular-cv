import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }

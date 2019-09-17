import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }

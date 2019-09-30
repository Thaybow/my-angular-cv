import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from '../template/template.module';
import { WhyThisWebsiteComponent } from './why-this-website/why-this-website.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, WhyThisWebsiteComponent, WelcomeComponent],
  imports: [
    CommonModule,
    TemplateModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [HomeComponent, WhyThisWebsiteComponent, WelcomeComponent]
})
export class PagesModule { }

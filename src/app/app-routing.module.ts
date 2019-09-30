import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {HomeComponent} from './pages/home/home.component';
import {WhyThisWebsiteComponent} from './pages/why-this-website/why-this-website.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'whyThisWebsite', component: WhyThisWebsiteComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

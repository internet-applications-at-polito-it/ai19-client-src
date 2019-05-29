import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule
    ,FormsModule
    ,RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }


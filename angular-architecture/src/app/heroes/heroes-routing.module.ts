import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroesRoutes: Routes = [
  { path: '', component: HeroesComponent, },
  { path: ':id', component: HeroesComponent },
];

@NgModule({
 imports: [ RouterModule.forChild(heroesRoutes) ],
 exports: [ RouterModule ]
})
export class HeroesRoutingModule { }


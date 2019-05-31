import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroesRoutes: Routes = [
{ path: 'heroes', component: HeroListComponent,
  children: [
    { path: ':id', component: HeroDetailComponent }
  ],
},
];

@NgModule({
 imports: [ RouterModule.forChild(heroesRoutes) ],
 exports: [ RouterModule ]
})
export class HeroesRoutingModule { }


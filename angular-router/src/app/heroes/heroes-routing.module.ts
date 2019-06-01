import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroImgComponent } from './hero-img.component';
import { HeroBtnComponent } from './hero-btn.component';

const heroesRoutes: Routes = [
{ path: 'heroes', component: HeroListComponent,
  children: [
    { path: ':id', component: HeroDetailComponent },
    // consider these two auxiliary routes later,
    // first look at the nested, master-detail route heroes/:id
    { path: 'img', component: HeroImgComponent, outlet: 'aside' },
    { path: 'btn', component: HeroBtnComponent, outlet: 'aside' },
  ],
},
];

@NgModule({
 imports: [ RouterModule.forChild(heroesRoutes) ],
 exports: [ RouterModule ]
})
export class HeroesRoutingModule { }


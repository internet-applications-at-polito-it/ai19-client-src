import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms'; 

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';

import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
  ],
  exports: [
    HeroListComponent
  ],
  declarations: [
    HeroesComponent, 
    HeroListComponent, 
    HeroDetailComponent,
  ],
  providers: [
    HeroService,
  ],
})
export class HeroesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroImgComponent } from './hero-img.component';
import { HeroBtnComponent } from './hero-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
  ],
  exports: [
    HeroListComponent,
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroImgComponent, HeroBtnComponent
  ],
  providers: [
    HeroService,
  ],
})
export class HeroesModule { }

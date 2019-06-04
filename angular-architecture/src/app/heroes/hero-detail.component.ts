import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  @Input()
  private hero = Hero;

  @Output('save')
  private saveHeroEmitter = new EventEmitter();

  @Output('back')
  private goBackEmitter = new EventEmitter();

  constructor() { }
/*
  @Input('hero')
  set hero(hero: Hero) {
    this.hero = hero;
  }

  get hero(): Hero {
    return this.hero;
  }
*/

  saveHero(hero: Hero) {
    this.saveHeroEmitter.emit(hero);
  }

  goBack(): void {
    this.goBackEmitter.emit(); 
  }
}

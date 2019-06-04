import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent {
  @Input() 
  private heroes: Hero[];

  @Output('select')
  heroEmitter = new EventEmitter<Hero>();

  constructor() { }
  
  selectHero(hero: Hero) { console.log('heroEmitter: ' + JSON.stringify(hero)); this.heroEmitter.emit(hero); }
}

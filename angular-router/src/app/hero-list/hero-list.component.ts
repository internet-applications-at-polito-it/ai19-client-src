import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.getHeroes(); 
  }
  
  getHeroes(): Hero[] {
    return this.heroService.getHeroes();
  }

}

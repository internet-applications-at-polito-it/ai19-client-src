
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cur: number;
  title: string;
  heroes: Hero[];
  myHero: Hero;

  constructor(private heroService: HeroService) {
    this.cur = 0; this.title = 'Tour of Heroes';
  }

  ngOnInit() {
    this.getHeroes();
    this.myHero = this.heroes[this.cur];
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  shiftHeroUp() {
    this.heroes.unshift(this.heroes.pop());
    this.myHero = this.heroes[0];
  }

  shiftHeroDown() {
    this.heroes.push(this.heroes.shift());
    this.myHero = this.heroes[0];
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];

  constructor(private http: HttpClient) { }

  /*
  getHeroes(): Hero[] {
    this.http
      .get<Hero[]>('http://localhost:3000/heroes/')
      .subscribe( (data) => { this.heroes = data; console.dir(data); });;
    return this.heroes;
  }
  */

  getHeroes() {
    return this.http.get<Hero[]>('http://localhost:3000/heroes/');
  }

  getHero(id: number) {
    return HEROES.find((hero => hero.id === id));
  }

}

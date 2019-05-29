import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() {
    return HEROES;
  }

  getHero(id: number) {
    return HEROES.find((hero => hero.id === id));
  }

}

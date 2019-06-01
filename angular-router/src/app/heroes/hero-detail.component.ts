import { Component, OnInit } from '@angular/core';

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
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  // hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /*
      this.hero$ = this.route.paramMap
        .switchMap((params: ParamMap) =>
          this.heroService.getHero(Number(params.get('id'))));
    */

    this.route.params.subscribe(params => {
      this.hero = this.heroService.getHero(Number(params.id));
      console.dir(this.hero);
    });

    /*
        const id = +this.route.snapshot.paramMap.get('id');
        this.hero = this.heroService.getHero(id);
    */
  }

  goBack(): void {
    this.location.back();
  }
}

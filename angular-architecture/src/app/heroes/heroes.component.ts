import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  private heroList$: Observable<Hero[]>;
  private selectedHero: Hero = null;


  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getHero();
  }

  getHero(): void {
    this.route.params.subscribe(params => { 
      this.selectedHero = this.heroService.getHero(Number(params['id'])); 
      console.dir(this.selectedHero); 
    });
  }

  /*
  getHeroes() {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }
  */

  getHeroes() {
    this.heroList$ = this.heroService.getHeroes();
    console.log('heroes.component.ts: getHeroes');
  /*
    this.heroService.getHeroes()
      .subscribe( (data) => { this.heroes = data; console.dir(data); });;
  */
  }

  selectHero(ev: Hero) {
    // this.selectedHero = ev;
    console.dir(ev);
    this.router.navigate([ '/heroes', ev.id]);
  }

  saveHero(hero: Hero) { console.log(this.selectedHero); }
  
    goBack() { console.log("goBack"); }
  
  }

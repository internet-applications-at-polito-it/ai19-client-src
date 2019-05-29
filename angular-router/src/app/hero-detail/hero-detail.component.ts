import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  // @Input() hero: Hero;
  hero: Hero;
  paramMapSub: Subscription;

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
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getHero(id);
    */
    // add this to the component and show it is not working
    // <a routerLink="/heroes/{{hero.id+10}}">next {{hero.id+10}}</a>
    this.paramMapSub =
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.hero = this.heroService.getHero(id);
    });

  }

  ngOnDestroy() {
    console.log('Unsubscribe');
    this.paramMapSub.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}

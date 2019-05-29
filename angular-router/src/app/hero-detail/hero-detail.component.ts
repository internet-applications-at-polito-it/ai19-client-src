import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back(); 
  }

}

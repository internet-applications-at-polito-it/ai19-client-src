
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cur = 0;
  title: string = 'Tour of Heroes';
  heroes = [
    { str: 'Windstorm' }, 
    { str: 'Bombasto' }, 
    { str: 'Magenta' }
  ];
  myHero = this.heroes[0];

  shiftHeroUp() {
    this.heroes.unshift(this.heroes.pop());
    this.myHero = this.heroes[0];
  }
  shiftHeroDown() {
    this.heroes.push(this.heroes.shift());
    this.myHero = this.heroes[0];
  }

}
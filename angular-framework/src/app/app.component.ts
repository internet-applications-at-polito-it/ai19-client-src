import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ai19';
  toggleTitle(event: Event) {
    this.title = (this.title === 'ai19') ? 'Applicazioni Internet (2019)' : 'ai19';
    console.log('toggleTitle: ' + this.title);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppObsService } from './app2.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http-service';
  data$;
  item$;

  constructor(private service: AppObsService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.data$ = this.service.getData();
  }

  addItem(item) {
    console.log(item.value);
    this.item$ = this.service.addItem({name: item.value})
    // .subscribe( () => this.getAll() ) // remove async pipe from code
    ;
  }
}

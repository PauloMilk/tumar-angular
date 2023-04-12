import { Component } from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filter: 'all' | 'active' | 'done' = 'all';
   allItems: Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: true },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if(this.filter == 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter == 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    })
  }

  delete(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}

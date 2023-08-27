import { Component } from '@angular/core';
import { Store } from './store';
import { Item } from './item';
import { MockDataRetrievalService } from './mock-data-retrieval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Organizer';
  stores!: Store[];
  items!: Item[];

  constructor(private mockDataService: MockDataRetrievalService){}

  ngOnInit(){
    this.stores = this.mockDataService.getStores();
  }
}

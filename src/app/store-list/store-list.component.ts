import { Component, Input } from '@angular/core';
import { Store } from '../store';
import { MockDataRetrievalService } from '../mock-data-retrieval.service';
import { Item } from '../item';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.sass']
})
export class StoreListComponent {
  @Input()
  store!: Store;
  items!: Item[];
  constructor(private mockDataService: MockDataRetrievalService) {}
  ngOnInit(){
    this.items = this.mockDataService.getItems(this.store);
    console.log(this.items);
  }

  checkItem(){

  }

  deleteItem(item: Item): boolean{
    return this.mockDataService.deleteItem(item);
  }

  editItem(){
  }
}

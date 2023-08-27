import { Injectable } from '@angular/core';
import { DataRetrieval } from './data-retrieval';
import { Item } from './item';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class MockDataRetrievalService implements DataRetrieval {
  constructor() { }
  getStores(): Store[] {
    return [
      new Store("Lowe's", "Carlisle Pike"),
      new Store("Target", "Carlisle Pike")
    ]
  }
  getItems(store: Store): Item[] {
    return [
      new Item("")
    ]
  }
  addItem(item: Item): boolean {
    throw new Error('Method not implemented.');
  }
  deleteItem(item: Item): void {
    throw new Error('Method not implemented.');
  }

}

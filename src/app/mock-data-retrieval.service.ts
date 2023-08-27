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
      new Item("Hat", 1, false, new Store("Target", "Carlisle Pike")),
      new Item("Socks", 1, false, new Store("Target", "Carlisle Pike")),
      new Item("Pants", 1, false, new Store("Target", "Carlisle Pike")),
      new Item("Hammer", 1, false, new Store("Lowe's", "Carlisle Pike")),
      new Item("Screwdriver", 1, false, new Store("Lowe's", "Carlisle Pike"))
    ].filter(item => item.store.name == store.name);
  }
  addItem(item: Item): boolean {
    console.log("mock add item");
    return true;
  }
  deleteItem(item: Item): boolean {
    console.log("mock delete item");
    return true;
  }

}

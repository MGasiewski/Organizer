import { Injectable } from '@angular/core';
import { DataRetrieval } from './data-retrieval';
import { Item } from './item';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class ApiDataRetrievalService implements DataRetrieval {
  constructor() { }
  getStores(): Store[] {
    throw new Error('Method not implemented.');
  }
  getItems(store: Store): Item[] {
    throw new Error('Method not implemented.');
  }
  addItem(item: Item): boolean {
    throw new Error('Method not implemented.');
  }
  deleteItem(item: Item): void {
    throw new Error('Method not implemented.');
  }
}

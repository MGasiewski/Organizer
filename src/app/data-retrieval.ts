import { Item } from "./item";
import { Store } from "./store";

export interface DataRetrieval {
  getStores(): Store[];
  getItems(store: Store): Item[];
  addItem(item: Item): boolean;
  deleteItem(item: Item): void;
}

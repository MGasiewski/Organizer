import { Store } from "./store";

export class Item{
  name: string;
  quantity: number;
  purchased: boolean;
  store: Store;
  constructor(name: string, quantity: number, purchased: boolean, store: Store){
    this.name = name;
    this.quantity = quantity;
    this.purchased = purchased;
    this.store = store;
  }
}

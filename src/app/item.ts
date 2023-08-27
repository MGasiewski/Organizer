export class Item{
  name: string;
  quantity: number;
  purchased: boolean;
  constructor(name: string, quantity: number, purchased: boolean){
    this.name = name;
    this.quantity = quantity;
    this.purchased = purchased;
  }
}

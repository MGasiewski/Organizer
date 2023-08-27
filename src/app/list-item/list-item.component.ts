import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {
  @Input()
  item!: Item;
}

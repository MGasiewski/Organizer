import { Component, Input } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.sass']
})
export class StoreListComponent {
  @Input()
  store!: Store;
}

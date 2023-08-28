import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganizerHeaderComponent } from './organizer-header/organizer-header.component';
import { StoreListComponent } from './store-list/store-list.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerHeaderComponent,
    StoreListComponent,
    EditModalComponent,
    AddModalComponent,
],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerHeaderComponent } from './organizer-header.component';

describe('OrganizerHeaderComponent', () => {
  let component: OrganizerHeaderComponent;
  let fixture: ComponentFixture<OrganizerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerHeaderComponent]
    });
    fixture = TestBed.createComponent(OrganizerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

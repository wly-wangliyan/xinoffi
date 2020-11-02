import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideParkingSystemComponent } from './roadside-parking-system.component';

describe('RoadsideParkingSystemComponent', () => {
  let component: RoadsideParkingSystemComponent;
  let fixture: ComponentFixture<RoadsideParkingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsideParkingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsideParkingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

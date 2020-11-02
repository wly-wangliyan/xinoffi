import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutRoadsideParkingSystemComponent } from './out-roadside-parking-system.component';

describe('OutRoadsideParkingSystemComponent', () => {
  let component: OutRoadsideParkingSystemComponent;
  let fixture: ComponentFixture<OutRoadsideParkingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutRoadsideParkingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutRoadsideParkingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

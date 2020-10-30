import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideCameraComponent } from './roadside-camera.component';

describe('RoadsideCameraComponent', () => {
  let component: RoadsideCameraComponent;
  let fixture: ComponentFixture<RoadsideCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsideCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsideCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

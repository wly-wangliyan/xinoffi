import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireFreeCameraComponent } from './wire-free-camera.component';

describe('WireFreeCameraComponent', () => {
  let component: WireFreeCameraComponent;
  let fixture: ComponentFixture<WireFreeCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireFreeCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WireFreeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

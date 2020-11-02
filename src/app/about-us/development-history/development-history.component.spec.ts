import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentHistoryComponent } from './development-history.component';

describe('DevelopmentHistoryComponent', () => {
  let component: DevelopmentHistoryComponent;
  let fixture: ComponentFixture<DevelopmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

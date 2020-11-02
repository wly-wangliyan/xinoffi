import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseQualificationComponent } from './enterprise-qualification.component';

describe('EnterpriseQualificationComponent', () => {
  let component: EnterpriseQualificationComponent;
  let fixture: ComponentFixture<EnterpriseQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

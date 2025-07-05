import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadpageComponent } from './leadpage.component';

describe('LeadpageComponent', () => {
  let component: LeadpageComponent;
  let fixture: ComponentFixture<LeadpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

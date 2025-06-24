import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnandrefundsComponent } from './returnandrefunds.component';

describe('ReturnandrefundsComponent', () => {
  let component: ReturnandrefundsComponent;
  let fixture: ComponentFixture<ReturnandrefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnandrefundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnandrefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

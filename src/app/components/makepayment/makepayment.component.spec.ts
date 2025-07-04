import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepaymentComponent } from './makepayment.component';

describe('MakepaymentComponent', () => {
  let component: MakepaymentComponent;
  let fixture: ComponentFixture<MakepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakepaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

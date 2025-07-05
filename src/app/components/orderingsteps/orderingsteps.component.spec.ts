import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingstepsComponent } from './orderingsteps.component';

describe('OrderingstepsComponent', () => {
  let component: OrderingstepsComponent;
  let fixture: ComponentFixture<OrderingstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingstepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderingstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

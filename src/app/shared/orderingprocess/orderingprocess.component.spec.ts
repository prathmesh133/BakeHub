import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingprocessComponent } from './orderingprocess.component';

describe('OrderingprocessComponent', () => {
  let component: OrderingprocessComponent;
  let fixture: ComponentFixture<OrderingprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinganddeliveryComponent } from './shippinganddelivery.component';

describe('ShippinganddeliveryComponent', () => {
  let component: ShippinganddeliveryComponent;
  let fixture: ComponentFixture<ShippinganddeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippinganddeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippinganddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

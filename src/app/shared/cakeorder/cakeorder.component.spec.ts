import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeorderComponent } from './cakeorder.component';

describe('CakeorderComponent', () => {
  let component: CakeorderComponent;
  let fixture: ComponentFixture<CakeorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

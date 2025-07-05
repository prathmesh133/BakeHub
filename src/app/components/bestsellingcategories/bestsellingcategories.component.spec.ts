import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellingcategoriesComponent } from './bestsellingcategories.component';

describe('BestsellingcategoriesComponent', () => {
  let component: BestsellingcategoriesComponent;
  let fixture: ComponentFixture<BestsellingcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestsellingcategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellingcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

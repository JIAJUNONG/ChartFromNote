import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSalesByYearModelComponent } from './laptop-sales-by-year-model.component';

describe('LaptopSalesByYearModelComponent', () => {
  let component: LaptopSalesByYearModelComponent;
  let fixture: ComponentFixture<LaptopSalesByYearModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopSalesByYearModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopSalesByYearModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

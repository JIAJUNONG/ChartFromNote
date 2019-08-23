import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSalesByModelByMonthComponent } from './laptop-sales-by-model-by-month.component';

describe('LaptopSalesByModelByMonthComponent', () => {
  let component: LaptopSalesByModelByMonthComponent;
  let fixture: ComponentFixture<LaptopSalesByModelByMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopSalesByModelByMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopSalesByModelByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

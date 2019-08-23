import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSalesComponent } from './laptop-sales.component';

describe('LaptopSalesComponent', () => {
  let component: LaptopSalesComponent;
  let fixture: ComponentFixture<LaptopSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

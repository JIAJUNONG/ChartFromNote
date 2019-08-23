import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLikesPieComponent } from './movie-likes-pie.component';

describe('MovieLikesPieComponent', () => {
  let component: MovieLikesPieComponent;
  let fixture: ComponentFixture<MovieLikesPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLikesPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLikesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

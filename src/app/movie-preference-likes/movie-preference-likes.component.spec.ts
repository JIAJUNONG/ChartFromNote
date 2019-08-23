import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreferenceLikesComponent } from './movie-preference-likes.component';

describe('MoviePreferenceLikesComponent', () => {
  let component: MoviePreferenceLikesComponent;
  let fixture: ComponentFixture<MoviePreferenceLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePreferenceLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePreferenceLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

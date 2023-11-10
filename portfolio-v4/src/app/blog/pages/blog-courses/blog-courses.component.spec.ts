import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCoursesComponent } from './blog-courses.component';

describe('BlogCoursesComponent', () => {
  let component: BlogCoursesComponent;
  let fixture: ComponentFixture<BlogCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogCoursesComponent]
    });
    fixture = TestBed.createComponent(BlogCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

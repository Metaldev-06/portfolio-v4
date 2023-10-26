import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRoutesComponent } from './blog-routes.component';

describe('BlogRoutesComponent', () => {
  let component: BlogRoutesComponent;
  let fixture: ComponentFixture<BlogRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogRoutesComponent]
    });
    fixture = TestBed.createComponent(BlogRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

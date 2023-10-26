import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeaderComponent } from './blog-header.component';

describe('BlogHeaderComponent', () => {
  let component: BlogHeaderComponent;
  let fixture: ComponentFixture<BlogHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogHeaderComponent]
    });
    fixture = TestBed.createComponent(BlogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

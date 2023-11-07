import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearcherComponent } from './blog-searcher.component';

describe('BlogSearcherComponent', () => {
  let component: BlogSearcherComponent;
  let fixture: ComponentFixture<BlogSearcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogSearcherComponent]
    });
    fixture = TestBed.createComponent(BlogSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

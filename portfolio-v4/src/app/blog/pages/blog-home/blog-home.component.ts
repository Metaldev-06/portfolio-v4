import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Pagination,
  PostDatum,
} from '@src/app/core/interfaces/post-data/post-data';
import { BlogDataService } from '@src/app/core/services/blog-data/blog-data.service';
import { CardPostComponent } from '@src/app/shared/card-post/card-post.component';

import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [CardPostComponent, NgFor, SkeletonModule, NgIf, NgStyle],
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHomeComponent implements OnInit {
  public posts = signal<PostDatum[]>([]);
  public page = signal<Pagination>({} as Pagination);
  public items = [1, 2, 3, 4, 5, 6, 7, 8];
  public showButtonPage = signal<boolean>(true);

  private readonly blogDataService = inject(BlogDataService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getPosts();
  }

  trackByFn(index: number, item: PostDatum) {
    return index;
  }

  getPosts(page = 1) {
    this.blogDataService.blogData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.posts.set(res.data);
        this.page.set(res.meta?.pagination);
      });

    if (this.posts()) {
      return;
    }

    this.blogDataService
      .getPosts(page)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.posts.set(res.data);
        this.blogDataService.setBlogData(res);
        this.page.set(res.meta.pagination);
      });
  }

  nextPage() {
    this.page.update((prev) => ({ ...prev, page: prev.page + 1 }));

    if (this.page().page === this.page().pageCount) {
      this.showButtonPage.set(false);
    }

    if (this.page().page > this.page().pageCount) {
      this.showButtonPage.set(false);
      return;
    }

    this.blogDataService
      .getPosts(this.page().page)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.posts.update((prev) => [...prev, ...res.data]);
      });
  }
}

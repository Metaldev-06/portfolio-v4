import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PostDatum } from '@src/app/core/interfaces/post-data/post-data';
import { BlogDataService } from '@src/app/core/services/blog-data/blog-data.service';
import { CardPostComponent } from '@src/app/shared/card-post/card-post.component';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [CardPostComponent, NgFor],
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHomeComponent implements OnInit {
  public posts = signal<PostDatum[]>([]);

  private readonly blogDataService = inject(BlogDataService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogDataService
      .getPosts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.posts.set(res.data);
      });
  }
}

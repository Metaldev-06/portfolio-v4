import { DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatumAttributes } from '@src/app/core/interfaces/post-data/post-data';
import { BlogDataService } from '@src/app/core/services/blog-data/blog-data.service';
import { ClipboardButtonComponent } from '@src/app/shared/clipboard-button/clipboard-button.component';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    NgFor,
    TitleCasePipe,
    DatePipe,
    NgIf,
    MarkdownModule,
    ClipboardButtonComponent,
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent implements OnInit {
  @Input() public slug = '';

  public post = signal<DatumAttributes>({} as DatumAttributes);

  private readonly blogDataService = inject(BlogDataService);
  private readonly destroyRef = inject(DestroyRef);

  readonly clipboardButton = ClipboardButtonComponent;

  ngOnInit(): void {
    this.blogDataService
      .getPostBySlug(this.slug)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.post.set(res.data[0].attributes);
      });

    document.documentElement.scrollTop = 0;
  }
}

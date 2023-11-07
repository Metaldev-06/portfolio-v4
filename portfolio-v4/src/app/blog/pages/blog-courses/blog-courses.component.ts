import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Datum } from '@src/app/core/interfaces/course-data/course-data';
import { BlogDataService } from '@src/app/core/services/blog-data/blog-data.service';

@Component({
  selector: 'app-blog-courses',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blog-courses.component.html',
  styleUrls: ['./blog-courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCoursesComponent implements OnInit {
  public courses = signal<Datum[]>([]);

  private readonly blogDataService = inject(BlogDataService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.blogDataService
      .getCoursesByYoutube()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.courses.set(res.data);
      });
  }
}

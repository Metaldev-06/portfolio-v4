import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-routes',
  standalone: true,
  imports: [],
  templateUrl: './blog-routes.component.html',
  styleUrls: ['./blog-routes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogRoutesComponent implements OnInit {
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
}

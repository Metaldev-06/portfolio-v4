import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-routes',
  standalone: true,
  imports: [],
  templateUrl: './blog-routes.component.html',
  styleUrls: ['./blog-routes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogRoutesComponent {}

import { NgFor, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [NgFor, TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHeaderComponent {
  public navItem = [
    {
      name: 'inicio',
      route: '/blog',
    },
    {
      name: 'cursos',
      route: 'courses',
    },
    {
      name: 'rutas',
      route: 'routes',
    },
    {
      name: 'portfolio',
      route: '',
    },
  ];
}

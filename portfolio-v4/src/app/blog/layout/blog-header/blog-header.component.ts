import { NgFor, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SearcherComponent } from '@src/app/shared/searcher/searcher.component';

import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [
    NgFor,
    TitleCasePipe,
    RouterLink,
    RouterLinkActive,
    SearcherComponent,
    OverlayPanelModule,
  ],
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHeaderComponent implements OnInit {
  public navItem = [
    {
      name: 'inicio',
      route: '/blog',
    },
    {
      name: 'cursos',
      route: 'courses',
    },
    // {
    //   name: 'rutas',
    //   route: 'routes',
    // },
    {
      name: 'portfolio',
      route: '',
    },
  ];

  public userMenu = [
    {
      name: 'menú',
      route: 'user',
      icon: 'pi pi-users',
    },
  ];

  private readonly router = inject(Router);

  ngOnInit(): void {}

  public searchByTitle(title: string) {
    this.router.navigate(['/blog/searcher'], {
      queryParams: {
        query: title,
      },
    });
  }
}

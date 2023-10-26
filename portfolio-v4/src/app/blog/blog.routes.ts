import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/blog-home/blog-home.routes').then(
            (c) => c.blogHomeRoutes
          ),
      },
      {
        path: 'post/:slug',
        loadChildren: () =>
          import('./pages/blog-post/blog-post.routes').then(
            (c) => c.blogPostRoutes
          ),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./pages/blog-courses/blog-courses.routes').then(
            (c) => c.blogCoursesRoutes
          ),
      },
      {
        path: 'routes',
        loadChildren: () =>
          import('./pages/blog-routes/blog-routes.routes').then(
            (c) => c.blogRoutesRoutes
          ),
      },
    ],
  },
];

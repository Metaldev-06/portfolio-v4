import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.routes').then((c) => c.portfolioRoutes),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.component').then((c) => c.AdminComponent),
  },

  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes').then((c) => c.blogRoutes),
  },
];

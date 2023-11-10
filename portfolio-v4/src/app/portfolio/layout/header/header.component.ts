import { NgClass, NgFor, UpperCasePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';

interface NavItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe,
    NgClass,
    NgFor,
    SidebarModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public headerFixed!: Boolean;

  public sidebarVisible2: boolean = false;

  public navItems = signal<NavItem[]>([
    {
      name: 'Inicio',
      route: '',
    },
    {
      name: 'Proyectos',
      route: '/projects',
    },
    {
      name: 'Habilidades',
      route: '/skills',
    },
    {
      name: 'Educación',
      route: '/education',
    },
    {
      name: 'Blog',
      route: '/blog',
    },
  ]);

  @HostListener('window:scroll', ['$event'])
  activeHeader() {
    if (window.scrollY >= 300) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }
}

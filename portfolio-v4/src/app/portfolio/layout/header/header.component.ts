import { NgClass, NgFor, UpperCasePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UpperCasePipe, NgClass, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public headerFixed!: Boolean;

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

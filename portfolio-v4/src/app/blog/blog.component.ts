import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogHeaderComponent } from './layout/blog-header/blog-header.component';
import { FooterComponent } from '../portfolio/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogHeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
}

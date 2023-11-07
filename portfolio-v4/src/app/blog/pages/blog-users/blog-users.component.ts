import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-users.component.html',
  styleUrls: ['./blog-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogUsersComponent {

}

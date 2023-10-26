import { NgFor, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ProjectsDatum,
  TentacledAttributes,
} from '@src/app/core/interfaces/home-data/home-data';
import { ImagePipe } from '@src/app/shared/pipes/image-pipe/image-pipe.pipe';
import { TitleComponent } from '@src/app/shared/title/title.component';
import { signal } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from '@src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    ImagePipe,
    TitleComponent,
    RouterLink,
    DialogModule,
  ],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent implements OnInit {
  @Input({ required: true }) public projects: ProjectsDatum[] = [];

  public projectsFilter = signal<ProjectsDatum[]>([]);

  private readonly dialog = inject(Dialog);

  ngOnInit(): void {
    this.projectsFilter.update(() => {
      return this.projects.filter((project) => {
        return project.attributes.primary === true;
      });
    });
  }

  openDialog(project: TentacledAttributes) {
    this.dialog.open(DialogComponent, {
      minWidth: '300px',
      width: '95%',
      maxWidth: '1000px',
      data: {
        project,
      },
    });
  }
}

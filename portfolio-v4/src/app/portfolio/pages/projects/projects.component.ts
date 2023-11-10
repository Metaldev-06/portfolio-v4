import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NgFor, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Dialog, DialogModule } from '@angular/cdk/dialog';

import { HomeDataService } from '@src/app/core/services/home-data/home-data.service';
import { ImagePipe } from '@src/app/shared/pipes/image-pipe/image-pipe.pipe';
import { TitleComponent } from '@src/app/shared/title/title.component';
import { DialogComponent } from '@src/app/shared/dialog/dialog.component';
import {
  ProjectsDatum,
  TentacledAttributes,
} from '@src/app/core/interfaces/home-data/home-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    ImagePipe,
    TitleCasePipe,
    TitleComponent,
    DialogModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  public projects = signal<ProjectsDatum[]>([]);

  private readonly dialog = inject(Dialog);
  private readonly homeDataService = inject(HomeDataService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getProjects();

    document.documentElement.scrollTop = 0;
  }

  getProjects() {
    this.homeDataService.homeData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resp) => {
        this.projects.set(resp.projects.data);
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

import {
  ChangeDetectionStrategy,
  Component,
  signal,
  Input,
  importProvidersFrom,
} from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { DataAttributes } from '@src/app/core/interfaces/home-data/home-data';
import { MarkdownModule } from 'ngx-markdown';
import { ImagePipe } from '@src/app/shared/pipes/image-pipe/image-pipe.pipe';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [NgFor, NgOptimizedImage, MarkdownModule, ImagePipe],
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class AboutMeSectionComponent {
  @Input({ required: true }) public aboutMe: DataAttributes =
    {} as DataAttributes;

  openCV() {
    window.open(this.aboutMe.resume_cv.data.attributes.url);
  }
}

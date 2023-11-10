import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CertificationsDatum } from '@src/app/core/interfaces/home-data/home-data';
import { HomeDataService } from '@src/app/core/services/home-data/home-data.service';
import { AtroposComponent } from '@src/app/shared/atropos/atropos.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AtroposComponent, NgFor],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit {
  public certifications = signal<CertificationsDatum[]>([]);

  private readonly destroyRef = inject(DestroyRef);
  private readonly homeDataService = inject(HomeDataService);

  ngOnInit(): void {
    this.getCertifications();

    document.documentElement.scrollTop = 0;
  }

  getCertifications() {
    this.homeDataService.homeData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resp) => {
        this.certifications.set(resp.certifications?.data);
      });
  }
}

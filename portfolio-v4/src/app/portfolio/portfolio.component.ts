import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeDataService } from '../core/services/home-data/home-data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { signal } from '@angular/core';
import { DataAttributes } from '../core/interfaces/home-data/home-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  public loading = signal<boolean>(true);

  private userData = signal<DataAttributes>({} as DataAttributes);

  private readonly homeDataService = inject(HomeDataService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.homeDataService.homeData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resp) => {
        this.userData.set(resp);
        this.loading.set(false);
      });

    if (Object.keys(this.userData()).length === 0) {
      this.homeDataService
        .getData()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (resp) => {
            this.homeDataService.setHomeData(resp.data.attributes);
            this.loading.set(false);
          },
          error: (error) => {
            console.error(error);
            this.loading.set(false);
          },
          complete: () => {
            this.loading.set(false);
          },
        });
    }
  }
}

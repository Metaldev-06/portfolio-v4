import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent {
  @Output() public query = new EventEmitter<string>();

  // public inputSearch = new FormControl('');
  public inputSearchForm!: FormGroup;

  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    // this.onChange();
    this.inputSearchForm = this.initForm();
  }

  // private onChange(): void {
  //   this.inputSearch.valueChanges
  //     .pipe(
  //       map((search) => search!.trim()),
  //       debounceTime(800),
  //       distinctUntilChanged(),
  //       filter((search: string) => search!.length > 0),
  //       tap((search: string) => {
  //         this.query.emit(search);
  //       }),
  //       takeUntilDestroyed(this.destroyRef)
  //     )
  //     .subscribe(() => {
  //       this.inputSearch.reset();
  //     });
  // }

  initForm() {
    return this.formBuilder.group({
      inputSearch: ['', Validators.required],
    });
  }

  submitQuery() {
    if (this.inputSearchForm.invalid) return;

    this.query.emit(
      this.inputSearchForm.value.inputSearch.toLowerCase().trim()
    );
    this.inputSearchForm.reset();
  }
}

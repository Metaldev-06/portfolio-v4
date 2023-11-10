import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { ClipboardOptions, MarkdownModule } from 'ngx-markdown';

import localeEsAr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { ClipboardButtonComponent } from './shared/clipboard-button/clipboard-button.component';

registerLocaleData(localeEsAr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom([
      MarkdownModule.forRoot({
        clipboardOptions: {
          provide: ClipboardOptions,
          useValue: {
            buttonComponent: ClipboardButtonComponent,
          },
        },
      }),

      FormsModule,
      ReactiveFormsModule,
    ]),
    provideAnimations(),
  ],
};

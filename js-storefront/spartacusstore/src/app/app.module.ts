import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2bStorefrontModule } from '@spartacus/setup';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2bStorefrontModule.withConfig({
      backend: {
        occ: {
          // The following line (baseUrl) is commented out because the build process will add it automatically (set in index.html at meta=occ-backend-base-url)
          // baseUrl: 'https://localhost:9002',

          // the prefix is /rest/v2/ with 1905, and by default /occ/v2 with 2005
          prefix: '/occ/v2/'
        }
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        currency: ['USD'],
        language: ['en'],
        baseSite: ['powertools-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      }
    }),
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

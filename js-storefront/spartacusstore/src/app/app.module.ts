import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/' // 'occ/v2' for 2005 or later, 'rest/v2' for 1905
        }
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['electronics-spa','apparel-uk-spa', 'electronics'],
        currency: ['USD', 'GBP',]
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.0'
      }
    }),
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

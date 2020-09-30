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
          baseUrl: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD', 'GBP'],
        language: ['en','de'],
        baseSite: ['electronics-spa', 'apparel-uk-spa', 'powertools-spa']
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

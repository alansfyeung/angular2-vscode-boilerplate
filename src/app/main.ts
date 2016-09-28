// main.ts is your [bootstrap file](https://angular.io/docs/ts/latest/guide/style-guide.html#!#02-05)
// Modules can either be [dynamically or statically bootstrapped](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#angular-modularity)

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';   // Dynamic bootstrapping
// import { platformBrowser } from '@angular/platform-browser';   // Static bootstrapping

import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err));

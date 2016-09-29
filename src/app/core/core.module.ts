// This is a [Core feature module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11)
// Note: The styleguide (as of Sep 2016) mentions the name of this file should 
// be 'core.module.ts' but that negates the benefit of the systemjs autoloader
// hence we'll retain the index.ts name

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,      // likely that your stuff will use this
  ],
  declarations: [

  ],
  exports: [
    
  ]
})
export class CoreModule {}

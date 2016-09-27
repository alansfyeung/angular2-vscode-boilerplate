## What is this?

A slightly-opinionated but mostly [style guide compliant](https://angular.io/docs/ts/latest/guide/style-guide.html) boilerplate for [Angular 2](https://angular.io/).

+ Uses [TypeScript](https://angular.io/docs/ts/latest/guide/style-guide.html) for Angular 2
+ SCSS for style sheets   
+ Gulp for task running
+ NPM is unavoidable in Angular 2
+ Follows Angular 2 defaults for things like [systemjs](https://github.com/systemjs/systemjs) <sup>1</sup>
+ [VS Code](https://code.visualstudio.com/Download) as the IDE<sup>2</sup> 

## First run

Hopefully you are familiar with NPM. Ensure you have NPM installed, and from the base folder of the repo, run: 
    
    npm init

This will download Angular2 and its dependencies, and it should also install dev dependencies for Gulp. Additionally, the [VS Code docs site recommends](https://code.visualstudio.com/docs/languages/css#_automating-sassless-compilation) that you also separately install Gulp globally, to allow VS Code to be able to trigger Gulp tasks by itself. You should run:

    npm install -g gulp


## Builds, watching, compiling/transpiling

Just make sure all your Angular2 stuff – TypeScript files, HTML index file and HTML templates, and SCSS source – resides under the `/src` folder following the [folder structure style guidelines](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-06). That is, we expect a `index.html`, `main.ts`, and various componentised folders. 

> One exception is the stylesheets; for this boilerplate we consolidate styles into a singular compiled SCSS bootstrap file, rather than the style guide's separate-CSS-per-component. Place your bootstrap SCSS file into `/src/scss`.

### Starting the build/watch from VS Code

The preconfigured *tasks.json* task will trigger a Gulp watch that publishes stuff into `/dist`. To activate this task from VS Code, press **CTRL+SHIFT+B** or use Command Palette (**CTRL+SHIFT+P**) then search for 'build'.

The outputs are:

+ Required Angular libs will be copied (once-off)
+ Static files will be copied (once-off) 
+ All `.ts` files in `/src` will be transpiled then copied – and watched for updates
+ The `.scss` files in `/src/scss` will be compiled then copied – and watched for updates

### Stopping the watch from VS Code

The task is long-running since it watches for source files. To stop the task, use the Command Palette (**CTRL+SHIFT+P**) then search 'terminate'.

## Useful Angular2 primer links

+ [The style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
+ [One to Two](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html) side by side comparison, for jogging the memory
+ VS Code [tasks.json configuration](https://code.visualstudio.com/docs/languages/typescript)
+ [Gulp builtins](https://gulp.readme.io/docs/gulpsrcglobs-options)
+ [Tour of Heroes boilerplate](https://github.com/johnpapa/angular2-tour-of-heroes)

<sup>1</sup> It would appear that SystemJS, Webpack, or Browserify are all valid module loaders for TypeScript

<sup>2</sup> Built-in Typescript and SCSS syntax highlighting, amongst [other cool things](https://code.visualstudio.com/docs/languages/typescript)

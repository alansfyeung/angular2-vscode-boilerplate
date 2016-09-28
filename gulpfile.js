// Magical Angular2 scss/ts dev compilers

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsconf = require('./tsconfig.json');


// Move all the npm-managed libs into dist
// Not needed if your index.html resides at root level
gulp.task('move-libs', function() {
    var npmModules = [
        'node_modules/core-js/**', 
        'node_modules/zone.js/**', 
        'node_modules/reflect-metadata/**', 
        'node_modules/@angular/**',
        'node_modules/rxjs/**',
        'node_modules/angular2-in-memory-web-api/**',
        'node_modules/systemjs/**'
    ]; 
    gulp.src(npmModules, {base: 'node_modules'})
        .pipe(gulp.dest('dist/lib'))
    gulp.src(['src/lib/**'])
        .pipe(gulp.dest('dist/lib'))
});

// Move all static (.html and .js) files, preserve paths
gulp.task('move-static', function() {
    gulp.src(['src/**/*.html', 'systemjs.config.js'])
        .pipe(gulp.dest('dist'))
});

// Compile specifically *.scss in that folder only
// Expected you'll have a style.scss or a main.scss which
// then includes ./partials/_partialfile.scss etc 
gulp.task('compile-scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

// Compile .ts wherever it is, preserve paths
gulp.task('compile-typescript', function(){
    return gulp.src('src/**/*.ts')
        .pipe(ts(tsconf.compilerOptions))
        .pipe(gulp.dest('dist'))
});

//
// Todo: Test runners could go here.
//

// Default task is watcher
gulp.task('default', ['move-libs', 'move-static', 'compile-scss', 'compile-typescript'], function() {
    // Specifically, no need to watch nodemodules
    // But all other dev stuff is watched:
    gulp.watch('./src/**/*.html', ['move-static']);
    gulp.watch('./src/scss/*.scss', ['compile-scss']);
    gulp.watch('./src/**/*.ts', ['compile-typescript']);
});

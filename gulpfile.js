// Magical Angular2 scss/ts dev compilers

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsconf = require('./tsconfig.json');


// Move all the npm-managed libs into dist
// Sadly must be done publish
gulp.task('move-nodemodules', function() {
    var npmModules = [
        'node_modules/core-js/**', 
        'node_modules/zone.js/**', 
        'node_modules/reflect-metadata/**', 
        'node_modules/systemjs/**'
    ]; 
    gulp.src(npmModules, {base: 'node_modules'})
        .pipe(gulp.dest('dist/libs'));
});

// Move all .html files, preserve paths
gulp.task('move-html', function() {
    gulp.src('src/**/*.html')
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
        .pipe(gulp.dest('dist'));
});

//
// Todo: Test runners could go here.
//

// Default task is watcher
gulp.task('default', ['move-nodemodules', 'move-html', 'compile-scss', 'compile-typescript'], function() {
    // Specifically, no need to watch nodemodules
    // But all other dev stuff is watched:
    gulp.watch('./src/**/*.html', ['move']);
    gulp.watch('./src/scss/*.scss', ['compile-scss']);
    gulp.watch('./src/**/*.ts', ['compile-typescript']);
});

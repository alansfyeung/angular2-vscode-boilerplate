// Magical Angular2 scss/ts dev compilers

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsconf = require('./tsconfig.json');

// Move all the .html files
gulp.task('move', function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
});

// Compile specifically *.scss in that folder only
// Expected you'll have a style.scss or a main.scss which
// then includes ./partials/_partialfile.scss etc 
gulp.task('compile-scss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

// Compile .ts wherever it is, mapping out to the 
// same path at the dest
gulp.task('compile-typescript', function(){
    return gulp.src('./src/**/*.ts')
        .pipe(ts(tsconf.compilerOptions))
        .pipe(gulp.dest('dist'));
});

//
// Todo: Test runners could go here.
//

// Default task is watcher
gulp.task('default', ['move', 'compile-scss', 'compile-typescript'], function() {
    gulp.watch('./src/**/*.html', ['move']);
    gulp.watch('./src/scss/*.scss', ['compile-scss']);
    gulp.watch('./src/**/*.ts', ['compile-typescript']);
})
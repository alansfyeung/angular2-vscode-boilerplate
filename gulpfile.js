// Magical Angular2 scss/ts dev compilers

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsconf = require('./tsconfig.json');


gulp.task('move', function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('compile-scss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('compile-typescript', function(){
    return gulp.src('./src/**/*.ts')
        .pipe(ts(tsconf.compilerOptions))
        .pipe(gulp.dest('dist'));
        // .pipe(gulp.dest());     // presuming that outDir will prepend a folder path     
        // function(f) {
        //     console.log(f.base);
        //     console.log(f.path);
        //     // return f.base + '/../dist/' + f.path;
        //     return './dist' + f.path.replace(f.base, '');
        // }
});

gulp.task('default', ['move', 'compile-scss', 'compile-typescript'], function() {
    gulp.watch('./src/**/*.html', ['move']);
    gulp.watch('./src/scss/*.scss', ['compile-scss']);
    gulp.watch('./src/**/*.ts', ['compile-typescript']);
})
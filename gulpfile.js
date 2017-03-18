/**
 * Created by zsaki on 2017-03-16.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var image = require('gulp-image');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');


gulp.task('connect', function () {
    connect.server({
        root: 'web'
    });
});

gulp.task('html', function () {
    gulp.src('./web/*.html')
});

gulp.task('image', function () {
    gulp.src('./src/img/**/*')
        .pipe(image())
        .pipe(gulp.dest('./web/assets'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./web/assets'));
});
gulp.task('watch', function () {
    gulp.watch(['./web/*.html'], ['html']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('compress', function (cb) {
      pump([
            gulp.src('./src/js/**/*.js'),
            uglify(),
            gulp.dest('./web/assets')
        ],
        cb

    );
});

gulp.task('default', ['connect', 'sass', 'watch', 'image', 'compress']);
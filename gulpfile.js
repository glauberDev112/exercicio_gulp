const gulp = require('gulp');
const sass_gulp = require('gulp-sass')(require('sass'));
const gsm = require('gulp-sourcemaps');
const js_mimi = require('gulp-uglify');
const js_obfus = require('gulp-obfuscate');
const img_min = require('gulp-imagemin');

function sass() {
  return gulp
    .src('./source/styles/*.*')
    .pipe(gsm.init())
    .pipe(sass_gulp({ outputStyle: 'compressed' }))
    .pipe(gsm.write('./maps'))
    .pipe(gulp.dest('./build/styles/'));
}

function javaScript() {
  return gulp
    .src('./source/scripts/*.*')
    .pipe(js_mimi())
    .pipe(gulp.dest('./build/scripts/'));
}

function images() {
  return gulp
    .src('./source/images/*.*')
    .pipe(img_min())
    .pipe(gulp.dest('./build/images/'));
}
function Html () {
    return gulp.src('./source/*.html')
    .pipe(gulp.dest('./build/'))
}

exports.default = function () {
  // sass
  gulp.watch('./source/styles/*.*', { ignoreInitial: false }, gulp.series(sass));
  // javaScript
  gulp.watch('./source/scripts/*.*', { ignoreInitial: false }, gulp.series(javaScript));
  // images
  gulp.watch('./source/images/*.*', { ignoreInitial: false }, gulp.series(images));
  // html
  gulp.watch('./source/*.html', { ignoreInitial: false }, gulp.series(Html));
};
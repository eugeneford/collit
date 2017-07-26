/**
 * Gulp Sass Task
 *
 * Compiles all sass files in project
 *
 * @type {Gulp|*|exports|module.exports}
 */
var gulp = require('gulp');
var config = require('../config');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass-watch', function () {
  gulp.watch(config.sass.src, ['sass']);
});

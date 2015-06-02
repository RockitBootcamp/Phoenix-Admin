'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var source = require('vinyl-source-stream');
var browserify = require('browserify');

var bundler = browserify({
  entries: ['./js/index.js'],
  debug: true
});

bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('bundle', function () {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('js'));
});

'use strict';
const gulp = require('gulp');
const config = require('rc')('p2-theme-core', require('./gulpconfig.js'));
const tsThemeCore = require('./scripts/gulp/index.js');

const tasks = {
  compile: [],
  watch: [],
  validate: [],
  clean: [],
  default: [],
};

tsThemeCore(gulp, config, tasks);

console.log(config);

gulp.task('clean', gulp.parallel(tasks.clean));
gulp.task('compile', gulp.series(
    'clean',
    gulp.series(tasks.compile)
));
gulp.task('validate', gulp.parallel(tasks.validate));
gulp.task('watch', gulp.parallel(tasks.watch));
tasks.default.push('watch');
gulp.task('default', gulp.series(
    'compile',
    gulp.parallel(tasks.default)
));
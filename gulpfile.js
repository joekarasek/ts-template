'use strict';
const gulp        = require('gulp');
const config      = require('./gulpconfig.js');
const hwdGulpCore = require('./scripts/hwdGulpCore/index.js');
const tasks = {
  compile: [],
  watch: [],
  validate: [],
  clean: [],
  default: [],
};

hwdGulpCore(gulp, config, tasks);

console.log("Tasks => ", tasks);
console.log("Config => ", config);

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


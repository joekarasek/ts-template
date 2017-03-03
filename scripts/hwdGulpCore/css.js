'use strict';
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const del = require('del');
const postcss = require('gulp-postcss');
const flatten = require('gulp-flatten');
const gulpif = require('gulp-if');
const cached = require('gulp-cached');
const join = require('path').join;
const sassdoc = require('sassdoc');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('gulp-stylelint');

module.exports = (gulp, config, tasks) => {


  function compileScss(done) {
    gulp.src(config.css.source)
        .pipe(sassGlob())
        .pipe(sourcemaps.init({}))
        .pipe(sass({
          outputStyle: config.css.outputStyle,
          sourceComments: config.css.sourceComments,
          includePaths: config.css.includePaths,
        }).on('error', sass.logError))
        .pipe(postcss(
            [
              autoprefixer({
                browsers: config.css.autoPrefixerBrowsers,
              }),
            ]
        ))
        .pipe(sourcemaps.write((config.css.sourceMap) ? './' : null))
        .pipe(gulpif(config.css.flattenOutput, flatten()))
        .pipe(gulp.dest(config.css.dest))
        .on('end', () => {
      done();
  });
  };
  compileScss.description = 'Compile Scss from source to dest, including sourcemap, autoprefixer, and flatten';
  gulp.task('scss', done => compileScss(done));
  tasks.compile.push('scss');


  gulp.task('clean:css', (done) => {
    del([
      join(config.css.dest, '*.{css,css.map}'),
    ], { force: true }).then(() => { done(); });
  });
  tasks.clean.push('clean:css');


  function validateCss() {
    return gulp.src(config.css.source)
        .pipe(cached('validate:css'))
        .pipe(stylelint({
          failAfterError: false,
          reporters: [
            { formatter: 'string', console: true },
          ],
        }));
  };
  validateCss.description = 'Lint Scss';
  gulp.task('validate:css', () => validateCss());
  tasks.validate.push('validate:css');


  function docsCss() {
    return gulp.src(config.css.sassdoc.source)
        .pipe(sassdoc({
          dest: config.css.sassdoc.dest,
          verbose: config.css.sassdoc.verbose,
          exclude: config.css.sassdoc.exclude,
        }));
  };
  docsCss.description = 'Build CSS docs using SassDoc';
  gulp.task('docs:sassdoc', docsCss);
  gulp.task('clean:docs:sassdoc', (done) => {
    del([config.css.sassdoc.dest]).then(() => {
      done();
    });
  });
  if (config.css.sassdoc.enabled) {
    tasks.compile.push('docs:sassdoc');
    tasks.clean.push('clean:docs:sassdoc');
  }

};



// const sassGlob = require('gulp-sass-glob');
// const sourcemaps = require('gulp-sourcemaps');
// const sass = require('gulp-sass');

// const stylelint = require('gulp-stylelint');
// const postcss = require('gulp-postcss');
// const cached = require('gulp-cached');
// const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');
// const flatten = require('gulp-flatten');
// const gulpif = require('gulp-if');
// const sassdoc = require('sassdoc');
// const join = require('path').join;
// const del = require('del');
// // const debug = require('gulp-debug');
//
// module.exports = (gulp, config, tasks) => {
//
//
//   function validateCss(errorShouldExit) {
//     return gulp.src(config.css.src)
//         .pipe(cached('validate:css'))
//         .pipe(stylelint({
//           failAfterError: errorShouldExit,
//           reporters: [
//             { formatter: 'string', console: true },
//           ],
//         }));
//   }
//
//   function validateCssWithNoExit() {
//     return validateCss(false);
//   }
//
//   validateCss.description = 'Lint Scss files';
//
//   gulp.task('validate:css', () => validateCss(true));
//
//   function docsCss() {
//     return gulp.src(config.css.src)
//         .pipe(sassdoc({
//           dest: config.css.sassdoc.dest,
//           verbose: config.css.sassdoc.verbose,
//           basePath: config.css.sassdoc.basePath,
//           exclude: config.css.sassdoc.exclude,
//           theme: config.css.sassdoc.theme,
//           sort: config.css.sassdoc.sort,
//         }));
//   }
//
//   docsCss.description = 'Build CSS docs using SassDoc';
//
//   gulp.task('docs:css', docsCss);
//
//   gulp.task('clean:docs:css', (done) => {
//     del([config.css.sassdoc.dest]).then(() => {
//     done();
// });
// });
//
//   function watchCss() {
//     const watchTasks = [cssCompile];
//     if (config.css.lint.enabled) {
//       watchTasks.push(validateCssWithNoExit);
//     }
//     if (config.css.sassdoc.enabled) {
//       watchTasks.push('docs:css');
//     }
//     const src = config.css.extraWatches
//         ? [].concat(config.css.src, config.css.extraWatches)
//         : config.css.src;
//     return gulp.watch(src, gulp.parallel(watchTasks));
//   }
//
//   watchCss.description = 'Watch Scss';
//
//   gulp.task('watch:css', watchCss);
//
//   tasks.watch.push('watch:css');
//
//   tasks.compile.push('css');
//
//   if (config.css.lint.enabled) {
//     tasks.validate.push('validate:css');
//   }
//
//   if (config.css.sassdoc.enabled) {
//     tasks.compile.push('docs:css');
//     tasks.clean.push('clean:docs:css');
//   }
//
//   tasks.clean.push('clean:css');
// };
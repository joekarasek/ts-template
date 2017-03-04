const htmlhint = require('gulp-htmlhint');
const swig = require('gulp-swig');
const gulpif = require('gulp-if');

module.exports = (gulp, config, tasks) => {

  function compileHtml(done) {
    return gulp.src(config.html.sources)
        .pipe(gulpif(config.html.swig.enabled, swig()))
        .pipe(gulp.dest(config.html.dest))
        .on('end', () => {
          if (config.browserSync.enabled) {
            browserSync.get('server').reload();
          }
          done();
        });;
  };
  compileHtml.description = 'Move html from source to build and run Swig if enabled';
  gulp.task('compile:html', done => compileHtml(done));
  tasks.compile.push('compile:html');


  function validateHtml() {
    return gulp.src(config.html.sources)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter('htmlhint-stylish'));
  };
  validateHtml.description = 'Lint Html';
  gulp.task('validate:html', validateHtml);
  if (config.html.lint) {
    tasks.validate.push('validate:html');
  }

};
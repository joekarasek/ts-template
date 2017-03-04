const htmlhint = require('gulp-htmlhint');

module.exports = (gulp, config, tasks) => {

  function validateHtml() {
    return gulp.src(config.html.source)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter('htmlhint-stylish'));
  };
  validateHtml.description = 'Lint Html';
  gulp.task('validate:html', () => validateHtml());
  if (config.css.lint) {
    tasks.validate.push('validate:html');
  }

};
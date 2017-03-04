'use strict';
const browserSync = require('browser-sync');

module.exports = (gulp, config, tasks) => {

  // if (config.browserSync.enabled) {
  //   require('./browserSync')(gulp, config, tasks);
  // }

  if (config.css.enabled) {
    require('./css')(gulp, config, tasks);
  }
  
  if (config.html.enabled) {
    require('./html')(gulp, config, tasks);
  }

  if (config.js.enabled) {
    require('./js')(gulp, config, tasks);
  }

};
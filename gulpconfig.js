module.exports = {
  browserSync: {
    "enabled": false,
  },
  css: {
    enabled: true,
    source: [
        'src/scss/**/*.scss',
    ],
    includePaths: [
        'src/canvas/scss/',
    ],
    dest: 'build/css/',
    lint: true,
    // outputStyles maybe 'expanded' or 'compressed'
    outputStyle: 'expanded',
    sourceMap: false,
    sourceComments: false,
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    flattenOutput: true,
    sassdoc: {
      enabled: true,
      dest: 'sassdoc',
      verbose: false,
      exclude: [],
    },
  },
  js: {
    enabled: true,
    source: 'src/js/*.js',
    dest: 'build/js/',
    destFileName: 'main.js',
    babel: false,
    uglify: false,
    sourceMap: false,
    includePaths: [],
  },
  validate: {
    enabled: false,
  },
};
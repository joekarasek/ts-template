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
    // outputStyles maybe 'expanded', 'compressed', 'nested'
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
    includePaths: [
        'src/canvas/js/**/*.js',
    ],
    eslint: {
      enabled: true,
      sources: [
          'src/js/**/*.js',
          'gulpfile.js',
      ],
    },
    documentationJs: {
      enabled: true,
      sources: [
        'src/js/**/*.js',
      ],
      dest: 'jsdoc',
      // Either 'html', 'md', or 'json'
      format: 'html',
    },
  },
  html: {
    enabled: true,
    source: 'src/index.html',
    dest: 'build/',
    lint: true,
  },
};
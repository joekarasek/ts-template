module.exports = {
  browserSync: {
    "enabled": false,
  },
  css: {
    enabled: true,
    source: [
        "src/scss/**/*.scss",
    ],
    includePaths: [
        "src/canvas/scss/",
    ],
    dest: "src/css/",
    lint: true,
    // outputStyles maybe 'expanded' or 'compressed'
    outputStyle: "expanded",
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
    "enabled": false,
  },
  validate: {
    enabled: false,
  },
};
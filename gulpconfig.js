module.exports = {
  browserSync: {
    "enabled": false,
  },
  css: {
    enabled: true,
    source: "src/scss/main.scss",
    includePaths: [],
    dest: "src/css/",
    // outputStyles maybe 'expanded' or 'compressed'
    outputStyle: "expanded",
    sourceMap: true,
    sourceComments: false,
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    flattenOutput: true,
    sassdoc: {
      enabled: true,
      source: 'src/scss/**/*.scss',
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
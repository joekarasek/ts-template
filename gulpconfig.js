module.exports = {
  css: {
    enabled: true,
    src: [
      'src/scss/**/*.scss',
    ],
    dest: 'build/css',
    flattenDestOutput: true,
    lint: {
      enabled: false,
      failOnError: false,
      // in addition to linting `css.src`, this is added.
      extraSrc: [],
    },
    // additional debugging info in comment of the output CSS - only use when necessary
    sourceComments: false,
    sourceMapEmbed: false,
    // tell the compiler whether you want 'expanded' or 'compressed' output code
    outputStyle: 'expanded',
    // https://github.com/ai/browserslist#queries
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    includePaths: [],
    // http://sassdoc.com
    sassdoc: {
      enabled: true,
      dest: 'sassdoc',
      verbose: false,
      basePath: '',
      exclude: [],
      theme: 'default',
      // http://sassdoc.com/customising-the-view/#sort
      sort: [
        'file',
        'group',
        'line>',
      ],
    },
  },
  js: {
    enabled: true,
    src: [
      './src/js/**/*.js',
    ],
    dest: './build/js',
    destName: 'script.js',
    sourceMapEmbed: false,
    uglify: false,
    babel: true,
    // Will bundle all bower JS dependencies (not devDeps)
    // creates a `bower_components.min.js` file in `js.dest`.
    bundleBower: false,
    eslint: {
      enabled: true,
      src: [
        'js/**/*.js',
        'source/_patterns/**/*.js',
        '.*.js',
        '*.js',
      ],
    },
  },
  browserSync: {
    enabled: true,
    port: 3050,
    watchFiles: [
      'sass'
    ],
    // enable when full CMS is set up
    domain: '',
    baseDir: './build',
    startPath: '',
    openBrowserAtStart: true,
    // requires above to be true; allows non-default browser to open
    browser: [
      'Google Chrome',
    ],
    // Tunnel the Browsersync server through a random Public URL
    // -> http://randomstring23232.localtunnel.me
    tunnel: false,
    reloadDelay: 100,
    reloadDebounce: 0,
    rewriteRules: [],
  }
};
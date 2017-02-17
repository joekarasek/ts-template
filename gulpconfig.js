module.exports = {
  css: {
    enabled: true,
    src: [
      'sass/**/*.scss',
    ],
    dest: 'css',
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
    includePaths: [
      './node_modules/breakpoint-sass/stylesheets',
      './node_modules/compass-mixins/lib',
    ],
    // http://sassdoc.com
    sassdoc: {
      enabled: false,
      dest: 'sassdoc',
      verbose: false,
      basePath: 'https://github.com/',
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
    enabled: false,
    src: [
      'js/**/*.js',
      'source/_patterns/**/*.js',
    ],
    dest: 'dest/',
    destName: 'script.js',
    sourceMapEmbed: false,
    uglify: false,
    babel: true,
    // Will bundle all bower JS dependencies (not devDeps)
    // creates a `bower_components.min.js` file in `js.dest`.
    bundleBower: true,
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
    enabled: false,
    port: 3050,
    watchFiles: [
      'sass'
    ],
    // enable when full CMS is set up
    domain: 'thp.dev',
    baseDir: './',
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
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
    // Enable the next two only for trouble shooting purposed
    sourceComments: false,
    sourceMap: false,
  },
  docs: {
    "enabled": false,
  },
  js: {
    "enabled": false,
  },
  validate: {
    enabled: false,
  },
};
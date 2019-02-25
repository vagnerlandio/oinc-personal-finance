const { src, dest, watch, series, parallel } = require('gulp');
const sass        = require('gulp-sass');
const pug         = require('gulp-pug');
const del         = require('del');
const browserSync = require('browser-sync');
const rename      = require('gulp-rename');
const concat      = require('gulp-concat');
const server      = browserSync.create();

// Aux variables and functions
function viewsPath(param) {
  const path = 'src/views/';
  return (typeof param === 'undefined') ? path : path + param;
}

function javascriptsPath(param) {
  const path = 'src/assets/javascripts/';
  return (typeof param === 'undefined') ? path : path + param;
}

function stylesheetsPath(param) {
  const path = 'src/assets/stylesheets/';
  return (typeof param === 'undefined') ? path : path + param;
}

function imagesPath(param) {
  const path = 'src/assets/images/';
  return (typeof param === 'undefined') ? path : path + param;
}

function materializePath(param) {
  const path = './node_modules/materialize-css/';
  return (typeof param === 'undefined') ? path : path + param;
}

const materializeFiles = [
  materializePath('js/cash.js'),
  materializePath('js/component.js'),
  materializePath('js/global.js'),
  materializePath('js/anime.min.js'),
  // materializePath('js/collapsible.js'),
  // materializePath('js/dropdown.js'),
  // materializePath('js/modal.js'),
  materializePath('js/materialbox.js'),
  // materializePath('js/parallax.js'),
  // materializePath('js/tabs.js'),
  // materializePath('js/tooltip.js'),
  // materializePath('js/waves.js'),
  // materializePath('js/toasts.js'),
  materializePath('js/sidenav.js'),
  // materializePath('js/scrollspy.js'),
  // materializePath('js/autocomplete.js'),
  // materializePath('js/forms.js'),
  // materializePath('js/slider.js'),
  // materializePath('js/cards.js'),
  // materializePath('js/chips.js'),
  // materializePath('js/pushpin.js'),
  materializePath('js/buttons.js'),
  // materializePath('js/datepicker.js'),
  // materializePath('js/timepicker.js'),
  // materializePath('js/characterCounter.js'),
  // materializePath('js/carousel.js'),
  // materializePath('js/tapTarget.js'),
  // materializePath('js/select.js'),
  // materializePath('js/range.js'),
];

// Tasks
function clean() {
  return del(['dist']);
}

function build(done) {
  series(
    clean,
    parallel(
      scripts,
      styles,
      images,
      views
    )
  )(done);
}

function scripts(done) {
  function application() {
    return src(javascriptsPath('application.js'))
      .pipe(dest('dist/js'));
  }

  function materialize() {
    return src(materializeFiles)
      .pipe(concat('materialize.js'))
      .pipe(dest('dist/js'));
  }

  series(application, materialize)(done);
}

function styles(done) {
  function application() {
    return src(stylesheetsPath('application.scss'))
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('dist/css'));
  }

  function materialize() {
    return src(stylesheetsPath('vendor/materialize.scss'))
      .pipe(sass({
        includePaths: './node_modules/materialize-css/sass/',
      }).on('error', sass.logError))
      .pipe(dest('dist/css'));
  }

  series(application, materialize)(done);
}

function images() {
  return src(imagesPath('**/*.*'))
    .pipe(dest('dist/img'));
}

function views() {
  return src(viewsPath('application.pug'))
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(dest('dist'));
}

// Server
function watcher() {
  watch(javascriptsPath('**/*.js'), series(scripts, reload));
  watch(stylesheetsPath('**/*.scss'), series(styles, reload));
  watch(imagesPath('**/*.*'), series(images, reload));
  watch(viewsPath('**/*.pug'), series(views, reload));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist',
    },

    // Set 'false' to prevents browser automatically open when the server starts
    open: false,
  });
  done();
}

// Commands
exports.clean   = clean;

// Main Commands
exports.build   = series(
  clean,
  parallel(
    scripts,
    styles,
    images,
    views
  )
);

exports.dev = series(
  build,
  serve,
  watcher
);

const { src, dest, watch, series, parallel } = require('gulp');
const sass        = require('gulp-sass');
const pug         = require('gulp-pug');
const del         = require('del');
const browserSync = require('browser-sync');
const rename      = require('gulp-rename');
const server      = browserSync.create();

// Aux variables and functions
function viewsPath(param) {
  const path = 'src/views/';
  return (typeof param === 'undefined') ? path : path + param;
}

// Tasks
function clean() {
  return del(['dist']);
}

function build(done) {
  series(clean, views)(done);
}

function views() {
  return src(viewsPath('application.pug'))
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(dest('dist'));
}

// Server
function watcher() {
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
exports.views   = views;
exports.watcher = series(build, watcher);
exports.reload  = reload;
exports.serve   = serve;

// Main Commands
exports.build   = series(clean, views);
exports.dev     = series(build, serve, watcher);

const { src, dest, watch, series, parallel } = require('gulp');
const sass        = require('gulp-sass');
const pug         = require('gulp-pug');
const del         = require('del');
const browserSync = require('browser-sync');
const server      = browserSync.create();

// Tasks
function clean() {
  return del(['dist']);
}

function build() {
  series(clean);
}

// Server
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist',
    },
    open: false,
  });
  done();
}

// Commands
exports.clean = clean;
exports.reload = reload;
exports.serve = serve;

// Main Commands
exports.build = series(clean);
exports.dev = series(build, serve);

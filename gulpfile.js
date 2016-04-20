var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  $ = require('gulp-load-plugins')({
    lazy: true
  });

// Runs the dev server
gulp.task('dev-server', ['watch', 'build'], function() {
  $.connect.server({
    root: './',
    livereload: true
  });
});

// Default watch task for CSS and JS files.
gulp.task('watch', ['js-watcher', 'html-watcher', 'css-watcher'], function() {});

// Watches for changes in JS files.
gulp.task('js-watcher', function() {
  gulp.watch(['./src/**/*.js'], ['reload']);
});

// Watches for changes in HTML files.
gulp.task('html-watcher', function() {
  gulp.watch('./*.html', ['reload']);
});

// Watches for changes in CSS files.
gulp.task('css-watcher', function() {
  gulp.watch('./src/css/*.css', ['reload']);
});

// Reloads index.html on HTML, CSS or JS files changes
gulp.task('reload', ['build'], function() {
  return gulp
    .src('./index.html')
    .pipe($.connect.reload());
});

gulp.task('build', function() {
  return browserify({
      entries: ['./src/ej1.js', './src/ej2.js', './src/ej3.js', './src/ej4.js', './src/login.js', './src/tabla.js']
    })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
})
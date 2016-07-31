var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', ['minify-css'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  
  gulp.watch("./src/**/*.sass", ['sass']);
});

gulp.task('sass', function() {
  return gulp.src("./src/legacy.sass")
  .pipe(sass())
  .on('error', onError)
  .pipe(autoprefixer())
  .pipe(gulp.dest("./dist/"));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src("./dist/legacy.css")
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest("./dist/"))	
  .pipe(browserSync.stream());
});

function onError(err) {
  console.log(err);
  this.emit('end');
}

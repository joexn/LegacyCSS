var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("default", ["minify-css", "sass-watch"]);

gulp.task("serve", ["launch-browsersync", "default"]);

gulp.task("sass-watch", function() {
  gulp.watch("src/**/*.sass", ["minify-css"]);
  setTimeout(function () {
    console.log("Watching for changes...");
    console.log("To abort, press ^C");
  }, 500);
});

gulp.task("process-sass", function() {
  return gulp.src("./src/legacy.sass")
    .pipe(sass())
    .on("error", onError)
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("minify-css", ["process-sass"], function() {
  return gulp.src("./src/legacy.sass")
    .pipe(sass({outputStyle: "compressed"}))
    .on("error", onError)
    .pipe(autoprefixer())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/"));
});

function onError(err) {
  console.error(err);
  this.emit("end");
}

gulp.task("launch-browsersync", function() {
  browserSync.init({
    server: true
  });
});

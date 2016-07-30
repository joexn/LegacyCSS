var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

// Static Server + watching sass/html files
gulp.task('serve', ['minify-css'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./src/**/*.sass", ['sass']); //If any sass changes, then process them
});

gulp.task('sass', function() {
    return gulp.src("./src/legacy.sass") 		//Grab the top level sass files
        .pipe(sass())					//Process them into CSS
        .on('error', onError)			//Print error if one occurs
        .pipe(autoprefixer())			//Prefix all necessary items
        .pipe(gulp.dest("./dist/"))	;	//Pipe to file

});

gulp.task('minify-css', ['sass'], function() {
	return gulp.src("./dist/legacy.css")
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest("./dist/"))	
    .pipe(browserSync.stream());	//Stream changes to all browsers
});

function onError(err) {
  console.log(err);
  this.emit('end');
}
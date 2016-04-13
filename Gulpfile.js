//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var open = require('gulp-open');
var del = require('del');

//task clean
gulp.task('clean', function() {
  return del(['./css/*']);
});

//task styles: cleans and complies scss to css
gulp.task('styles', function(done) {
  gulp.src('./scss/osfa.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('open-html', function(){
  gulp.src('./index.html')
  .pipe(open());
});

//Watch task
gulp.task('watch', ['styles'], function() {
  gulp.watch('./scss/*.scss', ['styles', 'open-html']);
  gulp.watch('./js/application.js', ['open-html']);
  gulp.watch('index.html', ['open-html']);
});

// default gulp task
gulp.task('default', ['styles', 'watch']);





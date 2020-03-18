
const gulp = require('gulp');
const browsersync = require('browser-sync').create(); 
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('dev/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }
    ).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(browsersync.stream());
});


gulp.task('pug', function (){
    return gulp.src('dev/*.pug')
                .pipe(pug({
                    pretty: true
                }))
                .pipe(gulp.dest('./dist/'));
              
});

gulp.task('autoprefixer', function(){
  return gulp.src()
})

gulp.task('default', function (){
  gulp.watch('dev/**/*.pug', gulp.series('pug'))
  gulp.watch('dev/sass/**/*.scss', gulp.series('sass'))
  gulp.watch('dist/*.html').on('change', browsersync.reload)
  browsersync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});
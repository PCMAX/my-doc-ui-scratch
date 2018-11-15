var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var wait = require('gulp-wait');
var connect = require('gulp-connect-php');


gulp.task('sass', function(){
    return gulp.src('app/assets/sass/**/*.scss')
        .pipe(wait(500))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError)) // Using gulp-sass
        // .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/assets/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function (){
    gulp.watch('app/assets/sass/**/*.scss', gulp.series('sass'));
     //Other watchers
    gulp.watch('app/assets/images/**.*', browserSync.reload);
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});

// gulp.task('connect-sync', function() {
//   connect.server({}, function (){
//     browserSync.init({
//         proxy: 'isrnew'
//     });
//   });

//   gulp.watch('**/*.php').on('change', function () {
//     browserSync.reload();
//     });
// });

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'app'
        },
    })
})

gulp.task('default', gulp.parallel('watch','sass','browserSync'));
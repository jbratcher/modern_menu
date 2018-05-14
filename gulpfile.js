// Require dependencies

// Gulp, BrowserSync, SASS, useref with gulpif to bundle and minify CSS adn JS, CSS autoprefixer, Imagemin to optimize images, cache to reduce reload, del to remove(clean) the dist directory

const gulp          = require('gulp'); // core dep
const pump          = require('pump');  // pipes streams together
const browserSync   = require('browser-sync').create();  // live browser reload
const sass          = require('gulp-sass');  //  gulp sass compiler
const useref        = require('gulp-useref');  // replace unmodded files with modded files
const uglify        = require('gulp-uglify');  // js uglify (minification)
const gulpIf        = require('gulp-if');  // conditional statements in gulp
const cssnano       = require('gulp-cssnano');  // css minification
const imagemin      = require('gulp-imagemin');  // img optimization
const cache         = require('gulp-cache');  // cache to reduce reload
const autoprefixer  = require('gulp-autoprefixer');  // autoprefix css
const babel         = require('gulp-babel');  // compile js to es2015
const del           = require('del');  // deletes files and folders for cleaining

// Move vendor files from node modules to src folders

// Move Fonts (font awesome) from node_modules to src/fonts

gulp.task('fonts', () =>
  gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'))
);

// Move Font Awesome Icons CSS to src/css/vendor

gulp.task('fa', () =>
  gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css/vendor'))
);

// Compile Sass & Inject Into Browser (Watched)

gulp.task('sass', () =>
  gulp.src('src/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream())
);

// Add vendor prefixes to src CSS and move to dist

gulp.task('autoprefix', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
);

// Compile ES6 to ES5 with Babel

gulp.task('compilejs', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js'))
);

// Optimize Images and cache (Watched)

gulp.task('img', () =>
  gulp.src('src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
          interlaced: true
        })))
    .pipe(gulp.dest('dist/images'))
);

// Live Reload function

// Serve and Watch src files

gulp.task('browserSync', gulp.parallel('sass', function() {
  browserSync.init({
      server: "./src",
      port: 8082     // Change port as needed, 8082 is for Cloud 9 workspace
}),
    gulp.watch("src/scss/*.scss", gulp.parallel('sass')),
    gulp.watch("src/*.html").on('change', browserSync.reload),
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
}));

// Bundle JS,CSS and minify

gulp.task('useref', () =>
  gulp.src('dist/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
);

// Move src files to dist

gulp.task('build:dist', () =>
    gulp.src(["src/**"])
        .pipe(gulp.dest("dist"))
);

// Clean Dist folder

gulp.task('clean:dist', () =>
  del('dist')
);

// Gulp default tasks

gulp.task('default', gulp.parallel('sass', 'fonts', 'fa', 'img', 'browserSync'));

gulp.task('build', gulp.series('clean:dist', 'build:dist', 'sass', 'fonts', 'fa', 'img', 'autoprefix', 'compilejs', 'useref'));
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function compilaSass() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}

gulp.task("sass", compilaSass);

function compilaJs() {
  return gulp
    .src("javascript/scripts/*.js")
    .pipe(concat("index.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("javascript/"))
    .pipe(browserSync.stream());
}

gulp.task("javascript", compilaJs);

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

gulp.task("browser-sync", browser);

function watch() {
  gulp.watch("scss/*.scss", compilaSass);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("javascript/scripts/*.js", compilaJs);
}

gulp.task("watch", watch);

gulp.task(
  "default",
  gulp.parallel("watch", "browser-sync", "sass", "javascript")
);

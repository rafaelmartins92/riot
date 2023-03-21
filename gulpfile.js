const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("css/"));
}

gulp.task("default", compilaSass);

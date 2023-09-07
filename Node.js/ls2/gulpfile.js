import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);

gulp.task("sass", function () {
  gulp
    .src("./src/styles/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./src/styles/css"));
});

const watcher = () => {
  gulp.watch("./src/styles/*.scss", gulp.series("sass"));
};

gulp.task("default", watcher);

export { watcher };
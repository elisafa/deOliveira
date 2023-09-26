const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const copy = require("gulp-copy");

function scripts() {
  return gulp.src("src/scripts/*.js").pipe(uglify()).pipe(gulp.dest("./dist/js"));
}
function html() {
  return gulp.src("src/pages/**/*").pipe(copy("./dist", { prefix: 1 }));
}

function styles() {
  return gulp
    .src("src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function images() {
  return gulp.src("src/images/**/*").pipe(imagemin()).pipe(gulp.dest("./dist/images"));
}

function videos() {
  return gulp.src("src/videos/**/*").pipe(gulp.dest("./dist/videos"));
}

exports.default = gulp.parallel(styles, images, scripts, html, videos);
exports.watch = function () {
  gulp.watch("src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("src/scripts/*.js", gulp.parallel(scripts));
  gulp.watch("src/pages/*.html", gulp.parallel(html));
  gulp.watch("src/videos/**/*", gulp.parallel(videos));
};

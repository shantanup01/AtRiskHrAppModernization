const gulp = require("gulp");
const messaging = require("./tasks/messaging");

/* TASKS */
const build = require("./tasks/build")(gulp);

/* BUILD NG COMPONENTS */
gulp.task("build", gulp.series([build]), done => {
  messaging.success("Build complete");
  done();
});
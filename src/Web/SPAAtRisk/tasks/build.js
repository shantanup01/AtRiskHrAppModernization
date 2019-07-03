const ts = require('gulp-typescript');
const del = require("del");
const messaging = require(`./messaging`);

const options = { read: false, force: true };

module.exports = gulp => {

  const clean = "clean";
  const compile = "compile";
  const build = "build";

  gulp.task(clean, () => {
    return del([`build/**`]);
  });

  const tsProject = ts.createProject('src/tsconfig.json');

  gulp.task(compile, function () {
    return gulp.src('src/*.ts')
      .pipe(tsProject())
      .pipe(gulp.dest('build'))
      .on("end", () => {
        messaging.success(`${compile} completed`);
      });
  });

  gulp.task(build, gulp.series([clean, compile], done => {
    messaging.success("cleaned & compiled completed");
    done();
  }));

  return build;
};

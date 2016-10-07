let gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    sourcemaps  = require("gulp-sourcemaps"),
    concat      = require("gulp-concat"),
    mocha       = require("gulp-mocha"),
    istanbul    = require("gulp-istanbul"),
    runSequence = require("run-sequence"),
    remapIstanbul = require("remap-istanbul/lib/gulpRemapIstanbul");

/**
 * ------------------------------------------------------------------
 * LINT
 * ------------------------------------------------------------------
 */
gulp.task("lint", function() {
  return gulp.src([
    "source/server/**/*.ts",
    "source/test/**/*.test.ts"
  ])
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report());
});

/**
 * ------------------------------------------------------------------
 * BUILD SERVER AND TESTS
 * ------------------------------------------------------------------
 */
var tsProj = tsc.createProject("tsconfig.json");

gulp.task("build-app", function() {
  return gulp.src([
    "source/server/**/*.ts",
    "typings/index.d.ts/",
    "source/server/interfaces/interfaces.d.ts"
  ])
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProj))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("built/server/"));
});

var tsTestProj = tsc.createProject("tsconfig.json");

gulp.task("build-test", function() {
  return gulp.src([
      "source/test/**/*.test.ts",
      "typings/index.d.ts/",
      "source/server/interfaces/interfaces.d.ts"
    ])
    .pipe(tsc(tsTestProj))
    .js.pipe(gulp.dest("built/"));
});

gulp.task("build", function(cb) {
  runSequence(["build-app", "build-test"], cb);
});

/**
 * ------------------------------------------------------------------
 * TEST AND CALCULATE COVERAGE
 * ------------------------------------------------------------------
 */
gulp.task("pre-test", function() {
    return gulp.src(["built/server/**/*.js"])
    // Covering files
    .pipe(istanbul())
    // Write the covered files to a temporary directory
    // .pipe(gulp.dest("test-tmp/"))
    .pipe(istanbul.hookRequire());
});

gulp.task("test", ["pre-test"], function() {
  return gulp.src("built/test/**/*.test.js")
    .pipe(mocha({
      ui: "bdd"
    }))
    .pipe(istanbul.writeReports({
        reporters: ["json"],
        reportOpts: {
    "text": {dir: "coverage/js", file: "coverage.txt"},
    "text-summary": {dir: "coverage/js", file: "coverage-summary.txt"}
  }

    }));
});

gulp.task("remap-istanbul", function () {
    return gulp.src("coverage/coverage-final.json")
        .pipe(remapIstanbul({
        basePath: "source/",
        reports: {
            "html": "coverage/html",
            "json": "coverage/coverage-final.json",
            "text": null,
            "text-summary": null
        }
    }));
});

/**
 * 
 * DEFAULT AND WATCH TASKS
 * 
 */
gulp.task("default", function (cb) {
    runSequence("lint", "build-app", "build-test", "test", "remap-istanbul", cb);
});

gulp.task("watch", ["default"], function () {
    gulp.watch([ "source/server/**/*.ts", "source/test/**/*.test.ts"], ["default"]);
});

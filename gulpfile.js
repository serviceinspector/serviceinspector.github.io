var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require("path");
var Builder = require('systemjs-builder');
var TaskRunner = (function () {
    function TaskRunner() {
    }
    TaskRunner.runTasks = function () {
        gulp.task('build-libs', function () {
            //gulp.src(TaskRunner.libs)
            //    .pipe(concat('libs.js'))
            //    .pipe(gulp.dest('./dist'));
            gulp.src("./node_modules/bootstrap/dist/css/bootstrap.css")
                .pipe(gulp.dest('./css'));
            TaskRunner.builder.trace(TaskRunner.input)
                .then(function (tree) { return TaskRunner.builder.bundle(tree, TaskRunner.output); });
        });
    };
    TaskRunner.builder = new Builder('./', './systemjs.config.js');
    TaskRunner.input = './app/main.js';
    TaskRunner.output = './dist/modules.js';
    TaskRunner.libs = [
        'node_modules/rxjs',
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/tether/dist/js/tether.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/systemjs/dist/systemjs.js"
    ];
    return TaskRunner;
}());
TaskRunner.runTasks();
//# sourceMappingURL=gulpfile.js.map
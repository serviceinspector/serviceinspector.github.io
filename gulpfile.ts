var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require("path");
var Builder = require('systemjs-builder');

class TaskRunner {

    private static builder = new Builder('./', './systemjs.config.js');

    private static input = './app/main.js';
    
    private static output = './dist/modules.js';

    private static libs = [
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/tether/dist/js/tether.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
    ];

    public static runTasks() {

        gulp.task('build-libs', () => {

            gulp.src(TaskRunner.libs)
                .pipe(concat('libs.js'))
                .pipe(gulp.dest('./dist'));

            gulp.src("./node_modules/bootstrap/dist/css/bootstrap.css")
                .pipe(gulp.dest('./css'));

            TaskRunner.builder.trace(TaskRunner.input)
                .then((tree) => { return TaskRunner.builder.bundle(tree, TaskRunner.output); });
        });
    }
}

TaskRunner.runTasks();
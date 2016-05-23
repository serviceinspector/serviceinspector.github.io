var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('./', './systemjs.config.js');

var libs = [
    "node_modules/es6-shim/es6-shim.min.js",
    "node_modules/zone.js/dist/zone.js",
    "node_modules/reflect-metadata/Reflect.js",
    "node_modules/systemjs/dist/system.src.js",
    "node_modules/jquery/dist/jquery.js",
    "node_modules/tether/dist/js/tether.js",

    "node_modules/bootstrap/dist/js/bootstrap.js"
];

var x = 1;
gulp.task('build-libs', () => {

    gulp.src(libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./dist'));

    builder.trace('./app/**/*')
        .then((tree) => { return builder.bundle(tree, './dist/modules.js'); });

});
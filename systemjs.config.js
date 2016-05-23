var SystemJSConfig = (function () {
    function SystemJSConfig() {
    }
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    SystemJSConfig.init = function () {
        SystemJSConfig.packageNames.forEach(function (pkgName) {
            SystemJSConfig.packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
        });
        System.config({ map: SystemJSConfig.map, packages: SystemJSConfig.packages });
    };
    SystemJSConfig.start = function () {
    };
    // map tells the System loader where to look for things
    SystemJSConfig.map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    SystemJSConfig.packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };
    SystemJSConfig.packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
    ];
    return SystemJSConfig;
}());
SystemJSConfig.init();
SystemJSConfig.start();
//# sourceMappingURL=systemjs.config.js.map
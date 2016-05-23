class SystemJSConfig {

      // map tells the System loader where to look for things
    private static map: Object = {
        'app': 'app', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    private static packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    private static packageNames: Array<string> = [
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
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    public static init() {

        SystemJSConfig.packageNames.forEach((pkgName) => {
            SystemJSConfig.packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
        });

        System.config({ map: SystemJSConfig.map, packages: SystemJSConfig.packages });
    }

    public static start() {

        System.import('app').catch(function (err) { console.error(err); });
    }
}
  
SystemJSConfig.init();
SystemJSConfig.start();
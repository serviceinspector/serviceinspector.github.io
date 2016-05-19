import { Component } from '@angular/core';
import { QuickHTTP } from "./directives/quick-http.component";

@Component({
    selector: 'service-inspector',
    templateUrl: "/html/service-inspector.html",
    directives: [QuickHTTP]
})
export class AppComponent { }
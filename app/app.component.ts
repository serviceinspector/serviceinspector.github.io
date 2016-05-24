import { Component } from '@angular/core';
import { QuickHTTP } from "./directives/quick-http.component";
import { WebRequestService } from './services/request.service';

@Component({
    selector: 'service-inspector',
    templateUrl: "/html/service-inspector.html",
    directives: [ QuickHTTP ],
    providers: [ WebRequestService ]
})
export class AppComponent { }
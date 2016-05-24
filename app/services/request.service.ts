import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise' // Does not work on VS2015/TS1.8

@Injectable()
export class WebRequestService {

    private static http: Http;

    constructor(private http: Http) { WebRequestService.http = http; }

    public static get(url: string): Promise<any> {

        return WebRequestService.http.get(url)
            ['toPromise']() // TypeScript hack for broken import
            .then(response => response.json().data)
            .catch(WebRequestService.onError);
    }

    private static onError(error) {

        console.log(error);
    }
}
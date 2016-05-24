import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise' // Does not work on VS2015/TS1.8

@Injectable()
export class WebRequestService {

    private http: Http;

    constructor(http: Http) { this.http = http; }

    public get(url: string): Promise<any> {

        return this.http.get(url)
            ['toPromise']() // TypeScript def hack for broken import
            .then(response => response.json().data)
            .catch(this.onError);
    }

    private onError(error) {

        console.log(error);
    }
}
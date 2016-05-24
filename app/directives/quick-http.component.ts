import { Component, ElementRef } from '@angular/core';
import { WebRequestService } from '../services/request.service';

@Component({
    selector: 'quick-http',
    templateUrl: '/html/quick-http.html'
})

export class QuickHTTP {

    public input: string;

    public element: ElementRef;

    constructor(element: ElementRef) {

        this.element = element;
    }

    public onSubmit() {

        WebRequestService.get(this.input)
            .then(this.onGetResult.bind(this));
    }

    public onGetResult(result) {

        console.log(result);
    }
}
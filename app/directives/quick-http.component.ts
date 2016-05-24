import { Component, ElementRef } from '@angular/core';
import { WebRequestService } from '../services/request.service';

@Component({
    selector: 'quick-http',
    templateUrl: '/html/quick-http.html'
})

export class QuickHTTP {

    private input: string = "";

    private element: ElementRef;

    private service: WebRequestService;

    constructor(service: WebRequestService, element: ElementRef) {

        this.element = element;
        this.service = service;
    }

    private submit() {

        debugger;
       
        if (!this.input.startsWith('http://') && !this.input.startsWith('https://')) {
            this.input = 'http://' + this.input;
        }

        this.service.get(this.input)
            .then(this.onGetResult.bind(this));
    }

    private onGetResult(result) {

        console.log(result);
    }

    private isButtonDisabled() {

        return this.input && this.input.length;
    }
}
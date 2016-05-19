import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

@Component({
    selector: 'quick-http'
})

export class QuickHTTP {
    
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }        
}
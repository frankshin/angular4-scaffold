import { Component, OnInit } from '@angular/core'

/**
 * files
 */
const aboutComponnetHtml = require('./about.html');
const aboutComponnetCss = require('./about.css');

@Component({
    selector: '',
    template: aboutComponnetHtml,
    styles: [String(aboutComponnetCss)]
})

export class AboutComponent implements OnInit{
    currentHero: any = '';
    //
    
    ngOnInit() {
        this.initPage();
    }

    initPage() {
        // console.log(this.currentHero);
    }
}
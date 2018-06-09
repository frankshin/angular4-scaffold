
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[heighLight]'
})
export class AboutDirective implements AfterViewInit{
    constructor(el: ElementRef){
        // el.nativeElement.style. = 'red';
        el.nativeElement.style.backgroundColor = 'yellow';
    }


    ngAfterViewInit() {
        console.error('执行到了指令。。。。');
    }
}
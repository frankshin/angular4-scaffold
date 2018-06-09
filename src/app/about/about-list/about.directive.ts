
import { AfterViewInit, Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[heighLight]'
})
export class AboutDirective implements AfterViewInit{
    constructor(private el: ElementRef){}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }


    ngAfterViewInit() {
        console.error('执行到了指令。。。。');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
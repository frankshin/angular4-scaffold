
/**
 * 
 * modules
 * 
 */
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

/**
 * directives
 */
import { AboutDirective } from './about-list/about.directive';

/**
 * components
 */
import { AboutComponent } from './about-list/about.component';

@NgModule({
    declarations: [
        AboutComponent,
        AboutDirective
    ],
    imports: [
        // BrowserModule
    ],
    providers: [],
})
export class AboutModule{}

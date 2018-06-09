
/**
 * 
 * modules
 * 
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

/**
 * components
 */
import { IndexComponent } from './index-list/index.component';

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class IndexModule{}
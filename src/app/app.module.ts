
import { NgModule } from '@angular/core';
/**
 * 
 * modules
 * 
 */
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module'
import { IndexModule } from './index/index.module'

/**
 * components
 */
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      AboutModule,
      IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

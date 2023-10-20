import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CbChapter, CbCode, CbHeader, CbMuted, CbWarn} from "./components/cb-components";
import {DocBundleGuide} from "./documents";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CbHeader,
    CbChapter,
    CbCode,
    CbWarn,
    CbMuted,

    DocBundleGuide,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "bundle-einfuehrung-und-benutzungsanweisung", component: DocBundleGuide },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CbChapter, CbCode, CbEvaluationTable, CbHeader, CbImageDot} from "./components/cb-components";
import {DocBundleEinfuehrungUndBenutzungsanweisung, DocLehrbogen, DocLehrbogenEvaluation} from "./documents";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CbHeader,
    CbChapter,
    CbCode,
    CbEvaluationTable,
    CbImageDot,

    DocBundleEinfuehrungUndBenutzungsanweisung,
    DocLehrbogen,
    DocLehrbogenEvaluation,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "bundle-einfuehrung-und-benutzungsanweisung", component: DocBundleEinfuehrungUndBenutzungsanweisung },
      { path: "lehrbogen-evaluation", component: DocLehrbogenEvaluation },
      { path: "lehrbogen", component: DocLehrbogen },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

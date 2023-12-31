import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  CbBadge,
  CbChapter,
  CbCode, CbCollapsable,
  CbEvaluationTable, CbFooter,
  CbFootnote,
  CbHeader,
  CbImageDot
} from "./components/cb-components";
import {DocBundleEinfuehrungUndBenutzungsanweisung, DocLehrbogen, DocLehrbogenEvaluation} from "./documents";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CbHeader,
    CbFooter,
    CbChapter,
    CbCode,
    CbEvaluationTable,
    CbImageDot,
    CbBadge,
    CbFootnote,
    CbCollapsable,

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

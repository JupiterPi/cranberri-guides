import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  CbBadge,
  CbChapter,
  CbCode, CbCollapsable,
  CbEvaluationTable,
  CbFootnote,
  CbHeader,
  CbImageDot
} from "./components/cb-components";
import {
  DocBundleEinfuehrungUndBenutzungsanweisung,
  DocFortgeschrittenesProjekt,
  DocLehrbogen,
  DocLehrbogenEvaluation
} from "./documents";
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
    CbBadge,
    CbFootnote,
    CbCollapsable,

    DocBundleEinfuehrungUndBenutzungsanweisung,
    DocLehrbogen,
    DocLehrbogenEvaluation,
    DocFortgeschrittenesProjekt,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "bundle-einfuehrung-und-benutzungsanweisung", component: DocBundleEinfuehrungUndBenutzungsanweisung },
      { path: "lehrbogen-evaluation", component: DocLehrbogenEvaluation },
      { path: "lehrbogen", component: DocLehrbogen },
      { path: "fortgeschrittenes-projekt", component: DocFortgeschrittenesProjekt },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

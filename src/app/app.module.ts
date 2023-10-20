import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CbChapter, CbCode, CbEvaluationTable, CbHeader} from "./components/cb-components";
import {DocBundleEinfuehrungUndBenutzungsanweisung, DocLehrbogenEvaluation} from "./documents";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CbHeader,
    CbChapter,
    CbCode,
    CbEvaluationTable,

    DocBundleEinfuehrungUndBenutzungsanweisung,
    DocLehrbogenEvaluation,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "bundle-einfuehrung-und-benutzungsanweisung", component: DocBundleEinfuehrungUndBenutzungsanweisung },
      { path: "lehrbogen-evaluation", component: DocLehrbogenEvaluation },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

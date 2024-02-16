import {Component} from "@angular/core";
import {window} from "rxjs";

@Component({
  templateUrl: "documents/bundle-einfuehrung-und-benutzungsanweisung.html"
})
export class DocBundleEinfuehrungUndBenutzungsanweisung {}

@Component({
  templateUrl: "documents/lehrbogen.html"
})
export class DocLehrbogen {}

@Component({
  templateUrl: "documents/lehrbogen-evaluation.html"
})
export class DocLehrbogenEvaluation {}

@Component({
  templateUrl: "documents/plakat.html"
})
export class DocPlakat {
  open() {
    open("/assets/documents/plakat.pdf");
  }
}

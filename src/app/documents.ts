import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: "documents/bundle-einfuehrung-und-benutzungsanweisung.html"
})
export class DocBundleEinfuehrungUndBenutzungsanweisung {}

@Component({
  templateUrl: "documents/lehrbogen.html"
})
export class DocLehrbogen implements OnInit {
  arduinoMode = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.arduinoMode = queryParams["arduinoMode"] != "false";
    });
  }

  get tickOrLoop() {
    return this.arduinoMode ? "loop" : "tick";
  }
}

@Component({
  templateUrl: "documents/lehrbogen-evaluation.html"
})
export class DocLehrbogenEvaluation {}

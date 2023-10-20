import {Component, Input} from "@angular/core";

@Component({
  selector: "cb-header",
  template: `
    <div class="cb-header">
      <div class="cb-logo">
        <img src="assets/cb-logo.png">
        <div>Cranberri</div>
      </div>
      <div class="cb-header-title"><ng-content></ng-content></div>
    </div>
  `
})
export class CbHeader {}

@Component({
  selector: "cb-chapter",
  template: `
    <div class="cb-chapter">
      <div class="cb-chapter-square">
        {{ordinal}}.
      </div>
      <div class="cb-chapter-text"><ng-content></ng-content></div>
    </div>
  `
})
export class CbChapter {
  @Input("ordinal") ordinal?: number;
}

@Component({
  selector: "cb-code",
  template: `
    <div class="cb-code"
         [class.blue]="color == 'blue'"
         [class.grey]="color == 'grey'"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CbCode {
  @Input("color") color: "none" | "blue" | "grey" = "none";
}

@Component({
  selector: "cb-warn",
  template: `<div class="cb-warn"><ng-content></ng-content></div>`
})
export class CbWarn {}

@Component({
  selector: "cb-muted",
  template: `<div class="cb-muted"><ng-content></ng-content></div>`
})
export class CbMuted {}

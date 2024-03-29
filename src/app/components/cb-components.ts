import {Component, Input} from "@angular/core";

@Component({
  selector: "cb-header",
  template: `
    <div class="cb-header">
      <div class="cb-logo" routerLink="/">
        <img src="assets/cb-logo.png" class="img">
        <div>Cranberri</div>
      </div>
      <div class="cb-header-title"><ng-content></ng-content></div>
    </div>
  `
})
export class CbHeader {}

@Component({
  selector: "cb-footer",
  template: `
    <p class="cb-footer">
      Alle Inhalte &copy; 2023 JupiterPi &bull; auf <a href="https://github.com/JupiterPi/cranberri-guides" target="_blank">GitHub</a> &bull; <a href="https://github.com/JupiterPi/cranberri" target="_blank">Cranberri</a>
    </p>
  `
})
export class CbFooter {}

@Component({
  selector: "cb-chapter",
  template: `
    <div class="cb-chapter">
      <div class="cb-chapter-square">
        {{ordinal}}
      </div>
      <div class="cb-chapter-text"><ng-content></ng-content></div>
    </div>
  `
})
export class CbChapter {
  @Input("ordinal") ordinal?: string;
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
  @Input("color") color: "none" | "blue" | "grey" = "blue";
}

@Component({
  selector: "cb-evaluation-table",
  template: `
    <div class="cb-evaluation-table-header">
      <div *ngFor="let option of options" class="header-cell">
        <div>{{option}}</div>
      </div>
    </div>
    <table class="cb-evaluation-table">
      <tr *ngFor="let question of questions">
        <td>
          {{getQuestionText(question)}}
          <div class="space" *ngIf="getQuestionSpace(question)"></div>
        </td>
        <td *ngFor="let option of options" class="tick"></td>
      </tr>
    </table>
  `
})
export class CbEvaluationTable {
  @Input("questions") questions: string[] = [];
  @Input("options") options: string[] = [];

  getQuestionText(question: string) {
    return question.endsWith("___") ? question.substring(0, question.length - 3) : question;
  }

  getQuestionSpace(question: string) {
    return question.endsWith("___");
  }
}

@Component({
  selector: "cb-img-dot",
  template: `
    <div class="cb-img-dot">
      <div><ng-content></ng-content></div>
    </div>
  `
})
export class CbImageDot {}

@Component({
  selector: "cb-badge",
  template: `
    <div class="cb-badge">
      <img [src]="getImage()">
      <div>{{getText()}}</div>
    </div>
  `
})
export class CbBadge {
  @Input("badge") badge?: "minecraft" | "java";

  getImage() {
    return `assets/badges/${this.badge}.png`;
  }

  getText() {
    if (this.badge == undefined) return "";
    return this.badge.substring(0, 1).toUpperCase() + this.badge.substring(1, this.badge.length);
  }
}

@Component({
  selector: "cb-footnote",
  template: `
    <div class="cb-footnote" (click)="show()">
      <div>*</div>
    </div>
  `
})
export class CbFootnote {
  @Input("text") text?: string;

  show() {
    alert(this.text);
  }
}

@Component({
  selector: "cb-collapsable",
  template: `
    <div class="cb-collapsable" [class.collapsed]="collapsed">
      <ng-container *ngIf="collapsed">
        <div class="label" (click)="collapsed = false">
          <div>-></div>
          {{label}}
        </div>
      </ng-container>
      <ng-container *ngIf="!collapsed">
        <div class="label" (click)="collapsed = true">
          <div style="font-size: 15px">&#10006;</div>
          {{label}}
        </div>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </ng-container>
    </div>
  `
})
export class CbCollapsable {
  @Input("label") label?: string;
  collapsed = true;
}

@Component({
  selector: "cb-big-button",
  template: `
    <div class="cb-big-button">
      <ng-content></ng-content>
    </div>
  `
})
export class CbBigButton {}

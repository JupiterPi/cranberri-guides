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
  @Input("color") color: "none" | "blue" | "grey" = "none";
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

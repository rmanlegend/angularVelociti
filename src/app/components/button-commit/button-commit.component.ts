import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
selector: "app-button",
template: `
<div class="dynamic-field babcock-button" [formGroup]="group">
<button type="submit" mat-raised-button color="primary">{{field.label}}</button>
</div>
`,
styles: []
})
export class ButtonCommitComponent implements OnInit {
field: FieldConfig;
group: FormGroup;
constructor() {}
ngOnInit() {}
}

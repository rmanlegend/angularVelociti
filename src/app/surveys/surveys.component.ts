import { Component, OnInit, ViewChild } from '@angular/core';
import { Survey } from '../survey';
import { SURVEYS } from '../mock-surveys';
import { FieldConfig } from '../field.interface';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  
/*   id: number;
  priority: number;
  surveyDate: Date;
  name: string; */

  surveys = SURVEYS;
  selectedSurvey: Survey;
  regConfig: FieldConfig[] = [
    {
      type: "select",
      label: "Platform",
      name: "platform",
      value: "",
      options: ["HMS Argyle", "HMS Iron Duke", "HMS Monmouth"]
    },
    {
      type: "select",
      label: "Survey Type",
      name: "surveyType",
      value: "",
      options: ["Constructional", "Mechanical", "Electrical"]
    },
    {
      type: "select",
      label: "Location",
      name: "location",
      value: "",
      options: ["NBCD Location 3", "NBCD Location 4", "NBCD Location 5", "NBCD Location 6", "NBCD Location 7"]
    },
    {
      type: "select",
      label: "Compartment",
      name: "compartment",
      value: "",
      options: ["Junior Rates Heads", "Senior Rates Heads", "Galley", "Machinery Space", "Senior rates quarters", "Captains quarters"]
    },
    {
      type: "input",
      label: "Description",
      inputType: "text",
      name: "description",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Description required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Side of ship",
      name: "sideOfShip",
      options: ["Port", "Starboard"],
      value: "Port"
    },
    {
      type: "button",
      label: "Save"
    },
    {
      type: "button",
      label: "Close"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelect(survey: Survey): void {
    this.selectedSurvey = survey;
  }

}

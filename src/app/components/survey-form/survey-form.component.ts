import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { SURVEYS } from 'src/app/mock-surveys';
import { Survey } from 'src/app/survey';
import { FieldConfig } from 'src/app/field.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})

export class SurveyFormComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

 
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
      type: "buttoncommit",
      label: "Save"
    },
    {
      type: "buttonreturn",
      label: "Close"

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

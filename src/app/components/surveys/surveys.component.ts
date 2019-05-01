import { Component, OnInit, ViewChild } from '@angular/core';
import { Survey } from '../../survey';
import { SURVEYS } from '../../mock-surveys';
import { FieldConfig } from '../../field.interface';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './../../components/dynamic-form/dynamic-form.component';

// ../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys = SURVEYS;
  selectedSurvey: Survey;
  constructor() { }

  ngOnInit() {
  }

   onSelect(survey: Survey): void {
    this.selectedSurvey = survey;
    
  } 

}

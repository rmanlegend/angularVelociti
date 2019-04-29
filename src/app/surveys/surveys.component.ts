import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SURVEYS } from '../mock-surveys';

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

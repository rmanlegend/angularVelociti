import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';
// import {MatCardModule} from '@angular/material';
// import {MatDividerModule} from '@angular/material';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
import { ButtonCommitComponent } from './components/button-commit/button-commit.component';
import { ButtonReturnComponent } from './components/button-return/button-return.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    InputComponent,
    ButtonCommitComponent,
    ButtonReturnComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    // MatCardModule,
    // MatDividerModule
  ],
  entryComponents: [
    InputComponent,
    ButtonCommitComponent,
    ButtonReturnComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

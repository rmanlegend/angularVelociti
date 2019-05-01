import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { Survey } from './survey';

const routes: Routes = [
    
    { path: '',
      redirectTo: 'surveys',
      pathMatch: 'full'
    },
    {
    path: 'surveys', component: SurveysComponent
    },
    {
    path: 'survey-form/:id', component: SurveyFormComponent
    }
/*   {
    path: 'survey',
    component: SurveysComponent,
    data: { title: 'Surveys List' }
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

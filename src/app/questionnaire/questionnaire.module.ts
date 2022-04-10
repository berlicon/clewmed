import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuestionnaireModule { }

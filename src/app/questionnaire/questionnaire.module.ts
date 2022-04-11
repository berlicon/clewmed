import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class QuestionnaireModule { }

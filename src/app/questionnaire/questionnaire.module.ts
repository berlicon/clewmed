import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class QuestionnaireModule { }

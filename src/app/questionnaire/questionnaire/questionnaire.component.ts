import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import data from './../questions.json';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  array: Item[] = data.patientQuestions as Item[];

  constructor() { }

  ngOnInit(): void {
  }
}

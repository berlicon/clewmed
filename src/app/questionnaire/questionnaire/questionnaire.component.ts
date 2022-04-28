import { Component, OnInit } from '@angular/core';
import { CatFact } from '../cat-fact';
import { Item } from '../item';
import { TestService } from '../services/test.service';
import data from './../questions.json';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  array: Item[] = data.patientQuestions as Item[];
  catFact: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  onRxJsTestClick(): void {
    //alert('onRxJsTestClick');
    this.testService.getCatFact().subscribe(
      {
        next: (value: CatFact) => { this.catFact = value.fact; alert(this.catFact); },
        error: (err: any) => { this.catFact = `Error: ${err}`; alert(this.catFact); },
        complete: () => { console.log('complete'); },
      }
    );
  }
}

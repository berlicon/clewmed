import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-questionnaire-item',
  templateUrl: './questionnaire-item.component.html',
  styleUrls: ['./questionnaire-item.component.scss']
})
export class QuestionnaireItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}

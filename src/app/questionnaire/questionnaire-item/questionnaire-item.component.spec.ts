import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireItemComponent } from './questionnaire-item.component';

describe('QuestionnaireItemComponent', () => {
  let component: QuestionnaireItemComponent;
  let fixture: ComponentFixture<QuestionnaireItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Item } from '../item';
import { QuestionnaireItemComponent } from '../questionnaire-item/questionnaire-item.component';
import { QuestionnaireComponent } from './questionnaire.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;
  let inputLabelDe: DebugElement;
  let inputLabelEl: any;
  let inputNumberDe: DebugElement;
  let inputNumberEl: any;
  let inputTextDe: DebugElement;
  let inputTextEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QuestionnaireComponent, QuestionnaireItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;

    const array: Item[] = [
      {
        "title": "Age",
        "type": "number",
        "value": 1
        },
        {
        "title": "Name",
        "type": "string",
        "value": 'a'
        },
      {
        "title": "Sex?",
        "type": "radio",
        "value": 0
      },
      {
        "title": "Blood pressure",
        "type": "select",
        "options": [
        "Low",
        "Middle",
        "High"
        ],
        "value": "Middle"
      },
      {
        "title": "Are you agree?",
        "type": "checkbox",
        "value": 1
      },
      {
        "title": "Your birthday",
        "type": "date",
        "value": new Date(1980, 1, 31)
      },
        {
        "title": "Are you using any heart medications ?",
        "type": "radio",
        "value": 1,
        "childItems": [
        {
          "parentAnswer": "1",
          "title": "Select medication",
          "type": "select",
          "value": "Aspirin",
          "options": [
          "Accupril",
          "Aceon (perindopril)",
          "Adalat (nifedipine)",
          "Altace (ramipril)",
          "Apresoline (hydralazine)",
          "Aspirin",
          "Benicar HCT (hydrochlorothiazide and olmesartan)",
          "Brilinta (ticagrelor)"
          ],
          "childItems": [
          {
            "parentAnswer": "Aspirin",
            "title": "How many times did you tooks Aspirin today?",
            "type": "number",
            "value": 2
          },
          {
            "title": "Did you had any water today?",
            "type": "radio",
            "value": 1,
            "childItems": [
            {
              "parentAnswer": "1",
              "title": "Did you drunk more then 1 liter of water today?",
              "type": "radio",
              "value": 0
            }
            ]
          }
          ]
        }
        ]
        }
    ];

    component.array = array;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('parse data and create component items', () => {
    expect(component.array)
    .withContext('data should be assigned')
    .toBeTruthy();

    inputLabelDe = fixture.debugElement.query(By.css('.label'));
    inputLabelEl = inputLabelDe.nativeElement;

    expect(inputLabelEl.textContent)
    .withContext('input label should be created')
    .toContain("Age");

    //debugger;
    inputNumberDe = fixture.debugElement.query(By.css('.input-number'));
    inputNumberEl = inputNumberDe.nativeElement;

    expect(inputNumberEl.textContent)
    .withContext('input number should be created')
    .toBeDefined();

    // expect(inputNumberEl.textContent)
    // .withContext('input number should be created')
    // .toContain(1);

    inputTextDe = fixture.debugElement.query(By.css('.input-text'));
    inputTextEl = inputTextDe.nativeElement;

    // expect(inputTextEl.textContent)
    // .withContext('input text should be created')
    // .toContain('a');




    
  });
});

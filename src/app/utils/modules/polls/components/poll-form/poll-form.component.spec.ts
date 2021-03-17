import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsFormComponent } from './questionnaire-form.component';

describe('QuestionnaireFormComponent', () => {
  let component: PollsFormComponent;
  let fixture: ComponentFixture<PollsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

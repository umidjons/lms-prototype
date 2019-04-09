import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.scss'],
  providers: [QuestionService]
})
export class QuestionsCreateComponent implements OnInit {

  form: FormGroup;
  answers: FormArray;

  constructor(private questionService: QuestionService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      question: [''],
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer(),
        this.createAnswer(),
      ])
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  addAnswer() {
    this.answers = this.form.get('answers') as FormArray;
    this.answers.push(this.createAnswer());
  }

  private createAnswer(): FormGroup {
    return this.fb.group({
      text: '',
      isCorrect: false
    });
  }

}

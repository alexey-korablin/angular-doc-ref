import { Component, OnInit } from '@angular/core';

import { Question } from '../../interfaces/question';
import { questions, themes } from '../../mock-questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questions: Question[] = questions;
  themes: Array<string> = themes;

  constructor() {}

  ngOnInit(): void {}
}

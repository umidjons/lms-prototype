import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
  providers: [QuestionService]
})
export class QuestionsListComponent implements OnInit {

  items: any;

  constructor(private questionService: QuestionService) {
  }

  async ngOnInit() {
    this.items = await this.questionService.list();
  }

}

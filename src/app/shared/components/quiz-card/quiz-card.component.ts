import { Component, Input } from '@angular/core';

import { QuizInterface } from '../../../core/types/quiz.interface';
import { MaterialModule } from '../../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  imports: [MaterialModule],
})
export class QuizCardComponent {
  @Input() quiz!: QuizInterface;
  constructor(private router: Router) {}
  startQuiz() {
    this.router.navigate(['/quizzes', this.quiz?._id]);
  }
}

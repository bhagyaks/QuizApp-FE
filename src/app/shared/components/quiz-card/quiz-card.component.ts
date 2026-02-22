import { Component, Input } from '@angular/core';

import { QuizInterface } from '../../../core/types/quiz.interface';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  imports: [MaterialModule],
})
export class QuizCardComponent {
  @Input() quiz!: QuizInterface;
}

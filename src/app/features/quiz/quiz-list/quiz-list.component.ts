import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectQuizVM } from '../store/quiz.selectors';
import { QuizStateInterface } from '../../../core/types/quizState.interface';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { QuizCardComponent } from '../../../shared/components/quiz-card/quiz-card.component';
import { quizActions } from '../store/quiz.actions';
import { QuizInterface } from '../../../core/types/quiz.interface';

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
  imports: [CommonModule, SpinnerComponent, QuizCardComponent],
})
export class QuizListComponent implements OnInit {
  quiz$!: Observable<{
    isLoading: boolean;
    error: string | null;
    data: QuizInterface[] | null;
  }>;

  constructor(private store: Store<{ quiz: QuizStateInterface }>) {}
  ngOnInit(): void {
    this.quiz$ = this.store.select(selectQuizVM);
    this.store.dispatch(quizActions.getQuizzes());
  }
}

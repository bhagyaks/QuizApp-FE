import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectError, selectIsLoading, selectQuizData } from '../store/quiz.reducer';
import { QuizStateInterface } from '../../../core/types/quizState.interface';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { QuizCardComponent } from '../../../shared/components/quiz-card/quiz-card.component';
import { quizActions } from '../store/quiz.actions';

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
  imports: [CommonModule, SpinnerComponent, QuizCardComponent],
})
export class QuizListComponent {
  quiz$: Observable<QuizStateInterface>;
  constructor(private store: Store) {
    this.quiz$ = combineLatest({
      isLoading: this.store.select(selectIsLoading),
      error: this.store.select(selectError),
      data: this.store.select(selectQuizData),
    });
    this.store.dispatch(quizActions.getQuizzes());
  }
}

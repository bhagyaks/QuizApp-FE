import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { QuizInterface } from '../../../core/types/quiz.interface';
import {
  selectCurrentQuiz,
  selectCurrentIndex,
  selectSelectedAnswers,
  selectScore,
} from '../store/quiz.selectors';
import { quizActions } from '../store/quiz.actions';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class AttemptQuizComponent implements OnInit {
  currentQuiz$!: Observable<QuizInterface | null | undefined>;
  currentIndex$!: Observable<number>;
  selectedAnswers$!: Observable<(string | null)[]>;
  score$!: Observable<number>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.currentQuiz$ = this.store.select(selectCurrentQuiz);
    this.currentIndex$ = this.store.select(selectCurrentIndex);
    this.selectedAnswers$ = this.store.select(selectSelectedAnswers);
    this.score$ = this.store.select(selectScore);
  }

  ngOnInit() {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.store.dispatch(quizActions.getQuiz({ id: quizId }));
    }
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.store.dispatch(quizActions.selectAnswer({ questionIndex, answer }));
  }

  nextQuestion() {
    this.store.dispatch(quizActions.nextQuestion());
  }

  resetQuiz() {
    this.store.dispatch(quizActions.resetQuiz());
  }
}

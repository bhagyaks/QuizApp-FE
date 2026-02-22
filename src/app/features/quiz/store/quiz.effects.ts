import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { QuizService } from '../../../core/services/quiz.service';
import { quizActions } from './quiz.actions';
import { QuizInterface } from '../../../core/types/quiz.interface';

export const getQuizEffect = createEffect(
  (actions$ = inject(Actions), quizService = inject(QuizService)) => {
    return actions$.pipe(
      ofType(quizActions.getQuizzes),
      switchMap(() => {
        return quizService.getQuizzes().pipe(
          map((quizzes: QuizInterface[]) => {
            return quizActions.getQuizzesSuccess({ quizzes });
          }),
          catchError(() => {
            return of(quizActions.getQuizzessFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);

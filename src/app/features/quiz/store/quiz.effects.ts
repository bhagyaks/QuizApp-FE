import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { QuizService } from '../../../core/services/quiz.service';
import { quizActions } from './quiz.actions';
import { QuizInterface } from '../../../core/types/quiz.interface';
import { routerNavigatedAction } from '@ngrx/router-store';

export const getQuizzesEffect = createEffect(
  (actions$ = inject(Actions), quizService = inject(QuizService)) => {
    return actions$.pipe(
      ofType(quizActions.getQuizzes),
      switchMap(() => {
        return quizService.getQuizzes().pipe(
          map((quizzes: QuizInterface[]) => {
            return quizActions.getQuizzesSuccess({ quizzes });
          }),
          catchError(() => {
            return of(quizActions.getQuizzesFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const getQuizEffect = createEffect(
  (actions$ = inject(Actions), quizService = inject(QuizService)) => {
    return actions$.pipe(
      ofType(quizActions.getQuiz),
      switchMap(({ id }) =>
        quizService.getQuiz(id).pipe(
          map((quiz) => quizActions.getQuizSuccess({ quiz })),
          catchError((error) => of(quizActions.getQuizFailure({ error: error.message }))),
        ),
      ),
    );
  },
  { functional: true },
);

// Reset quiz state on navigation
export const resetQuizOnNavigationEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => quizActions.resetQuiz()),
    ),
  { functional: true },
);

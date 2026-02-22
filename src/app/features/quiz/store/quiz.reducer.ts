import { createFeature, createReducer, on } from '@ngrx/store';
import { QuizInterface } from '../../../core/types/quiz.interface';
import { QuizStateInterface } from '../../../core/types/quizState.interface';
import { quizActions } from './quiz.actions';
import { routerNavigatedAction } from '@ngrx/router-store';
const initialState: QuizStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const quizFeature = createFeature({
  name: 'quiz',
  reducer: createReducer(
    initialState,
    on(quizActions.getQuizzes, (state) => ({ ...state, isLoading: true })),
    on(quizActions.getQuizzesSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.quizzes,
    })),
    on(quizActions.getQuizzessFailure, (state) => ({ ...state, isLoading: false })),
    on(routerNavigatedAction, () => initialState),
  ),
});

export const {
  name: quizFeatureKey,
  reducer: quizReducer,
  selectIsLoading,
  selectError,
  selectData: selectQuizData,
} = quizFeature;

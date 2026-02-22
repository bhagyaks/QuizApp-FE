import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizStateInterface } from '../../../core/types/quizState.interface';
import { quizFeatureKey } from './quiz.reducer';

// feature selector
export const selectQuizFeature = createFeatureSelector<QuizStateInterface>(quizFeatureKey);

// individual selectors
export const selectIsLoading = createSelector(selectQuizFeature, (state) => state.isLoading);
export const selectError = createSelector(selectQuizFeature, (state) => state.error);
export const selectQuizData = createSelector(selectQuizFeature, (state) => state.data);
export const selectCurrentQuiz = createSelector(selectQuizFeature, (state) => state.currentQuiz);
export const selectCurrentIndex = createSelector(selectQuizFeature, (state) => state.currentIndex);
export const selectSelectedAnswers = createSelector(
  selectQuizFeature,
  (state) => state.selectedAnswers,
);
export const selectScore = createSelector(selectQuizFeature, (state) => state.score);

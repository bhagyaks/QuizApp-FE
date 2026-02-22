import { createReducer, on } from '@ngrx/store';
import { QuizStateInterface } from '../../../core/types/quizState.interface';
import { quizActions } from './quiz.actions';

export const quizFeatureKey = 'quiz'; // Add feature key

export const initialState: QuizStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  currentQuiz: null,
  currentIndex: 0,
  selectedAnswers: [],
  score: 0,
};

export const quizReducer = createReducer(
  initialState,

  // Fetch all quizzes
  on(quizActions.getQuizzes, (state) => ({ ...state, isLoading: true })),
  on(quizActions.getQuizzesSuccess, (state, { quizzes }) => ({
    ...state,
    isLoading: false,
    data: quizzes,
  })),
  on(quizActions.getQuizzesFailure, (state) => ({ ...state, isLoading: false })),

  // Fetch single quiz
  on(quizActions.getQuiz, (state) => ({ ...state, isLoading: true })),
  on(quizActions.getQuizSuccess, (state, { quiz }) => ({
    ...state,
    isLoading: false,
    currentQuiz: quiz,
    currentIndex: 0,
    selectedAnswers: Array(quiz.questions?.length || 0).fill(null),
    score: 0,
    error: null,
  })),
  on(quizActions.getQuizFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // Attempt quiz
  on(quizActions.selectAnswer, (state, { questionIndex, answer }) => {
    if (!state.currentQuiz) return state;

    const updatedAnswers = [...state.selectedAnswers];
    updatedAnswers[questionIndex] = answer;

    const updatedScore = state.currentQuiz.questions.reduce(
      (acc, q, idx) => acc + (updatedAnswers[idx] === q.correctAnswer ? 1 : 0),
      0,
    );

    return {
      ...state,
      selectedAnswers: updatedAnswers,
      score: updatedScore,
    };
  }),

  on(quizActions.nextQuestion, (state) => ({
    ...state,
    currentIndex: state.currentIndex + 1,
  })),

  on(quizActions.resetQuiz, () => initialState),
);

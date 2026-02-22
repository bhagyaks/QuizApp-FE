import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { QuizService } from '../../../core/services/quiz.service';
import { QuizInterface } from '../../../core/types/quiz.interface';

export const quizActions = createActionGroup({
  source: 'quiz',
  events: {
    'Get quizzes': emptyProps(),
    'Get quizzes success': props<{ quizzes: QuizInterface[] }>(),
    'Get quizzess failure': emptyProps(),
    'Get quiz': props<{ id: string }>(),
    'Get quiz success': props<{ quiz: QuizInterface }>(),
    'Get quiz failure': props<{ error: string }>(),
  },
});

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { QuizInterface } from '../../../core/types/quiz.interface';

export const quizActions = createActionGroup({
  source: 'quiz',
  events: {
    'Get quizzes': emptyProps(),
    'Get quizzes success': props<{ quizzes: QuizInterface[] }>(),
    'Get quizzes failure': emptyProps(),

    'Get quiz': props<{ id: string }>(),
    'Get quiz success': props<{ quiz: QuizInterface }>(),
    'Get quiz failure': props<{ error: string }>(),

    // New actions for attempting quiz
    'Select answer': props<{ questionIndex: number; answer: string }>(),
    'Next question': emptyProps(),
    'Reset quiz': emptyProps(),
  },
});

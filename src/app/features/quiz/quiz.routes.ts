import { Route } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AttemptQuizComponent } from './attempt-quiz/attempt-quiz.component';

export const routes: Route[] = [
  {
    path: '',
    component: QuizListComponent,
  },
  // { path: 'quizzes/:id', component: AttemptQuizComponent }, // dynamic route for quiz attempt
  // { path: '**', redirectTo: 'quizzes' }, // fallback
];

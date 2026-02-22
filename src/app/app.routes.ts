import { Routes } from '@angular/router';
import { ComingSoonComponent } from './features/coming-soon/coming-soon.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/quiz/quiz.routes').then((m) => m.routes),
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
  },
  {
    path: '**',
    redirectTo: 'coming-soon',
  },
];

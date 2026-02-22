import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import * as quizEffects from './features/quiz/store/quiz.effects';
import { quizFeatureKey, quizReducer } from './features/quiz/store/quiz.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(quizFeatureKey, quizReducer),
    provideEffects(quizEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

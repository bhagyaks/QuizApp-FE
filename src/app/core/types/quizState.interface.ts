import { QuizInterface } from './quiz.interface';

export interface QuizStateInterface {
  isLoading: boolean;
  error: string | null;
  data: QuizInterface[] | null;
}

import { QuizInterface } from './quiz.interface';

export interface QuizStateInterface {
  isLoading: boolean;
  error: string | null;
  data: QuizInterface[] | null;
  currentQuiz?: QuizInterface | null;
  currentIndex: number;
  selectedAnswers: string[];
  score: number;
}

import { QuestionInterface as Question } from './question.interface';

export interface QuizInterface {
  _id: string;
  title: string;
  category: string;
  questions: Question[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

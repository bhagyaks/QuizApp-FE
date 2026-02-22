import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { QuizInterface } from '../types/quiz.interface';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private api = `${environment.apiUrl}/quizzes`;
  constructor(private http: HttpClient) {}
  getQuizzes(): Observable<QuizInterface[]> {
    return this.http.get<QuizInterface[]>(this.api).pipe(tap((data) => console.log(data)));
  }
  getQuiz(id: string): Observable<QuizInterface> {
    return this.http.get<QuizInterface>(`${this.api}/${id}`);
  }
}

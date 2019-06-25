import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IList, ITask } from '../../models/interfaces';

@Injectable({providedIn: 'root'})
export class TodoService {
  private apiUrl: string = `${environment.apiUrl}/todo`;

  constructor(private http: HttpClient) {
  }

  getAllLists(): Observable<IList[]> {
    return this.http.get<any>(`${this.apiUrl}/lists`);
  }

  createList(name: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/lists`, {name});
  }

  addTask(listId: string, taskName: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/lists/${listId}/task`, {name: taskName});
  }

  updateTask(listId: string, task: ITask): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/lists/${listId}/task`, task);
  }

  deleteTask(listId: string, taskId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/lists/${listId}/task/${taskId}`);
  }

  removeCompletedTasks(listId: string): Observable<string[]> {
    return this.http.delete<string[]>(`${this.apiUrl}/lists/${listId}/tasks/completed`);
  }
}

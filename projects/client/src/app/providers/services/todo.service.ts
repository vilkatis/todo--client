import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IList } from '../../models/interfaces';

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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getAllLists(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/todo/lists`);
  }
}

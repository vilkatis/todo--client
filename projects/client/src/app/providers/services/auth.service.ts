import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUser } from '../../models';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  private apiUrl: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private storageService: StorageService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(storageService.get('currentUser')));
  }

  public get currentUser(): any {
    return this.currentUserSubject.value;
  }


  login(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/login`, {username, password}).pipe(
      tap((user: IUser) => {
        this.storageService.set('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigateByUrl('/');
      })
    );
  }

  register(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/register`, {username, password}).pipe(
      tap((user: IUser) => {
        this.storageService.set('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigateByUrl('/');
      })
    );
  }

  logout() {
    this.storageService.remove('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/');
  }
}

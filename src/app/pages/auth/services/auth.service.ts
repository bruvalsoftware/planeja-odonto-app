import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public login(username, password): Observable<any> {
    return this.httpClient.post( this.apiUrl + "v1/user/login", {
      "username": username,
      "password": password,
    });
    
  }

  public setUserData(token, username, user_id): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('user_id', user_id);
  }

  public sign(token, username, user_id): void {
  
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }

  public setToken(token): void{
    localStorage.setItem('token', token);
  }

  public getToken(): string{
    return localStorage.getItem('token');
  }
}

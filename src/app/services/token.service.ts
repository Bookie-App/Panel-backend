import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { TokenResponse } from '../models/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  
  private loginUrl = 'https://bookie.escuelaestech.com.es/api/auth/login';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.loginUrl, login, {headers:this.httpHeaders})
  }

  getAdmin(): Observable<any>{
    return this.http.get<any>('https://bookie.escuelaestech.com.es/api/demo/admin')
  }

  getUser(): Observable<any>{
    return this.http.get<any>('https://bookie.escuelaestech.com.es/api/demo/user')
  }
}


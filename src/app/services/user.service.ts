import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioResponse } from '../models/usuarioresponse';
import { RegisterRequest } from '../models/registerrequest';
import { TokenResponse } from '../models/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  
  private userUrl = 'https://bookie.escuelaestech.com.es/api/usuario';
  private registernUrl = 'https://bookie.escuelaestech.com.es/api/auth/register';

  constructor(private http: HttpClient) {}

  listaUsuario(): Observable<UsuarioResponse[]>{
    return this.http.get<UsuarioResponse[]>(this.userUrl)
  }

  eliminarUsuario(id: number) : Observable<any>{
    return this.http.delete(`${this.userUrl}/${id}`)
  }

  addUsuario(usuario: RegisterRequest): Observable<TokenResponse>{
    return this.http.post<TokenResponse>(this.registernUrl, usuario, {headers:this.httpHeaders})
  }
}

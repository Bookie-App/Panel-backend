import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioResponse } from '../models/usuarioresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  
  private userUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  listaUsuario(): Observable<UsuarioResponse[]>{
    return this.http.get<UsuarioResponse[]>(this.userUrl)
  }
}

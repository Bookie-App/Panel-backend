import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LibroResponse } from '../models/libroresponse';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  private libroUrl = 'http://localhost:8080/api/libro';
  constructor(private http:HttpClient) { }

  listaLibros(): Observable<LibroResponse[]>{
    return this.http.get<LibroResponse[]>(this.libroUrl)
  }

  listaLibrosUsuario(id: number): Observable<LibroResponse[]>{
    return this.http.get<LibroResponse[]>(`${this.libroUrl}/usuario/${id}`)
  }

  eliminarLibro(id: number): Observable<any>{
    return this.http.delete(`${this.libroUrl}/${id}`)
  }

  addLibro(libro: Libro): Observable<LibroResponse>{
    return this.http.post<LibroResponse>(this.libroUrl, libro, {headers:this.httpHeaders})
  }

  
}

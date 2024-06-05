import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


export class TokenInterceptor implements HttpInterceptor{

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('Llamando al interceptor')

    let interceptorRequest = req
    let token = sessionStorage.getItem('token')

    if(token!=null){
      interceptorRequest = req.clone({
        headers : req.headers.set('Authorization', 'Bearer '+token)
      })
    }

    return next.handle(interceptorRequest)
  }

}

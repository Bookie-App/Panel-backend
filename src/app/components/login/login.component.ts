import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../../models/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  form: FormGroup;
  
  constructor(private tokenService: TokenService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: '', password: ''
    });
  }

  login(): void {
    let login: Login = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    };

    this.tokenService.login(login).subscribe({
      next: res => {

        if(sessionStorage.getItem('token') != null){
          console.log("Eliminando el token...")
          sessionStorage.removeItem('token')
        }

        console.log('Creando el token...')
        sessionStorage.setItem('token', res.token)
        
        console.log(res)
      },
      error: err => console.log(err.status)
    });
  }
}

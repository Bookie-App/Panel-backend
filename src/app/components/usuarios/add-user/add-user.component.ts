import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../../models/registerrequest';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  form: FormGroup;
  
  constructor(private usuarioService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      rol: '', nombre: '', username: '', password: '', email: '', ciudad: '', provincia: '', codigoPostal: null, token: ''
    });
  }

  register(): void{
    let register : RegisterRequest = {
      rol: this.form.get('rol')?.value,
      nombre: this.form.get('nombre')?.value,
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
      email: this.form.get('email')?.value,
      ciudad: this.form.get('ciudad')?.value,
      provincia: this.form.get('provincia')?.value,
      codigoPostal: this.form.get('codigoPostal')?.value,
      reportado:false,
      token:''
    }

    this.usuarioService.addUsuario(register).subscribe({
      next: res => {
        this.router.navigate(['/usuarios'])
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}

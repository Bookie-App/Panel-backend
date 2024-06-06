import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UsuarioResponse } from '../../../models/usuarioresponse';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  form: FormGroup

  constructor(private usuarioService: UserService, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      username: '', email: ''
    })
  }

  usuarios?: UsuarioResponse[]


  ngOnInit(){
    this.getUsers()
  }
  

  getUsers(){

    this.usuarioService.listaUsuario().subscribe({
      next: res => {
        this.usuarios = res
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })

  }
}

import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UsuarioResponse } from '../../../models/usuarioresponse';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibroService } from '../../../services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  form: FormGroup

  constructor(private usuarioService: UserService, private formBuilder: FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      username: '', email: ''
    })
  }

  usuarios: UsuarioResponse[] = []
  textoBusqueda: string = '';
  usuariosFiltrados: UsuarioResponse[] = []
  reportado: boolean = false


  ngOnInit(){
    this.getUsers()
    
    if(localStorage.getItem('id') != null){
      localStorage.removeItem('id')
    }
  }
  

  getUsers(){

    this.usuarioService.listaUsuario().subscribe({
      next: res => {
        this.usuarios = res
        this.usuariosFiltrados = res
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })

  }


  eliminarUser(id: number){

    if(confirm("¿Eliminar usuario?")){
      this.usuarioService.eliminarUsuario(id).subscribe({
        next: res => {
          this.getUsers()
        },
        error: err => {
          console.log(err)
        }
      })
    }else{
      alert("Acción cancelada")
    }

  }

  
  navegarLibrosUsuario(id: number){
    this.router.navigate(['/libros-usuario'])
    localStorage.setItem('id', id.toString())
  }

  filtrarUsuarios(): void {
    if (this.usuarios) {
      this.usuariosFiltrados = this.usuarios.filter(usuario => 
        usuario.username.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
    }
  }

  filtrarUsuariosReportados(): void {
    if (this.usuarios) {
      this.usuariosFiltrados = this.usuarios.filter(usuario => 
        usuario.reportado
      );
    }
  }

  onSwitchChange(reportado: boolean) {
    if (reportado) {
      this.filtrarUsuariosReportados();
    } else {
      this.filtrarUsuarios();
    }
  }

}

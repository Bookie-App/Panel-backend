import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';
import { Libro, UsuarioId } from '../../models/libro';
import { UserService } from '../../services/user.service';
import { UsuarioResponse } from '../../models/usuarioresponse';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrl: './addlibro.component.css'
})
export class AddlibroComponent {

  form: FormGroup
  usuarios: UsuarioResponse[] = []

  constructor(private libroService:LibroService, private formBuilder: FormBuilder, private router: Router, private usuarioService:UserService){
    this.form = this.formBuilder.group({
      titulo: '', autor: '', numeroPaginas: null, genero: '', sinopsis: '', editorial: '', usuario: null
    })
  }

  ngOnInit(){
    this.getUsers()
  }

  addLibro(): void{
    let libro: Libro = {
      titulo: this.form.get('titulo')?.value,
      autor: this.form.get('autor')?.value,
      numeroPaginas: this.form.get('numeroPaginas')?.value,
      genero: this.form.get('genero')?.value,
      sinopsis: this.form.get('sinopsis')?.value,
      editorial: this.form.get('editorial')?.value,
      usuario: {
        id:parseInt(this.form.get('usuario')?.value)
      },
      prestado: false
    }

    this.libroService.addLibro(libro).subscribe({
      next: res => {
        this.router.navigate(['/libros'])
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
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

  localStorage(id:number){
    localStorage.setItem("id",id.toString())
  }

}

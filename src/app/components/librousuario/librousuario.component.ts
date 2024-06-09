import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { LibroResponse } from '../../models/libroresponse';

@Component({
  selector: 'app-librousuario',
  templateUrl: './librousuario.component.html',
  styleUrl: './librousuario.component.css'
})
export class LibrousuarioComponent {

  constructor(private libroService:LibroService){}

  libros?: LibroResponse[]

  ngOnInit(){
    this.getLibrosUsuario()
  }

  getLibrosUsuario(){

    this.libroService.listaLibrosUsuario(parseInt(localStorage.getItem('id') || '0')).subscribe({
      next: res => {
        this.libros = res
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })

  }

  eliminarLibro(id: number){

    if(confirm("¿Eliminar libro?")){
      this.libroService.eliminarLibro(id).subscribe({
        next: res => {
          this.libroService.listaLibrosUsuario(parseInt(localStorage.getItem('id') || '0')).subscribe(data =>{
            this.libros = data
          })
        },
        error: err => {
          console.log(err)
        }
      })
    }else{
      alert("Acción cancelada")
    }

  }
}

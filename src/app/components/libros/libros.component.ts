import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { LibroResponse } from '../../models/libroresponse';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

  constructor(private libroService:LibroService){}


  libros?: LibroResponse[]

  ngOnInit(){
    this.getLibros()
  }

  getLibros(){

    this.libroService.listaLibros().subscribe({
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

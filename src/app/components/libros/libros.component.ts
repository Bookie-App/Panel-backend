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
  textoBusqueda: string = '';
  librosFiltrados: LibroResponse[] = []

  ngOnInit(){
    this.getLibros()
  }

  getLibros(){

    this.libroService.listaLibros().subscribe({
      next: res => {
        this.libros = res
        this.librosFiltrados = res
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
          this.getLibros()
        },
        error: err => {
          console.log(err)
        }
      })
    }else{
      alert("Acción cancelada")
    }

  }

  filtrarLibros(): void {
    if (this.libros) {
      this.librosFiltrados = this.libros.filter(libros => 
        libros.titulo.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        libros.usuario.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      )
    }
  }
}

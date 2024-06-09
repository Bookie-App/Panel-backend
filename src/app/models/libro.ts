export interface Libro{
    titulo:string
    autor:string
    numeroPaginas:number
    genero:string
    sinopsis:string
    editorial:string
    prestado:boolean
    usuario:UsuarioId
}

export interface UsuarioId{
    id:number
}
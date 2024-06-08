export interface RegisterRequest{
    rol:Rol
    nombre:string
    username:string
    password:string
    email:string
    ciudad:string
    provincia:string
    codigoPostal:number
    reportado:boolean
    token:string
}

enum Rol{
    ROLE_USER,
    ROLE_ADMIN
}
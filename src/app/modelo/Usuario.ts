export class Usuario {
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;

    constructor(nombre, apellido, usuario, password){
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
    }
}
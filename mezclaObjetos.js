class usuario{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

class producto{
    constructor(id, nombre, idusuario){
        this.id = id;
        this.nombre = nombre;
        this.idusuario = idusuario;
    }
}

const usuarios = [];
class usuario{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
    
    mostrar(){
        console.log(this.id, this.nombre);
    }
}

class producto{
    constructor(id, nombre, idusuario){
        this.id = id;
        this.nombre = nombre;
        this.idusuario = idusuario;
    }

    mostrar(){
        console.log(this.id, this.nombre, this.idusuario)
    }
}

const usuarios = [];
usuarios.push(new usuario(1, 'Clark'));
usuarios.push(new usuario(2, 'Diego'));
usuarios.push(new usuario(3, 'Kronner'));
usuarios.push(new usuario(4, 'Waffles'));
usuarios.push(new usuario(5, 'Fara'));

usuarios.map((usuario) => {
    usuario.mostrar();
})

const productos = [];
productos.push(new producto(1, 'Rainbow Six', 3));
productos.push(new producto(2, 'GTA V', 1));
productos.push(new producto(3, 'Fortnite', 4));
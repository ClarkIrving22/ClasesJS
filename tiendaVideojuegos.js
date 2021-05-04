class juego{
    constructor(nombre, precio, genero, clasificacion){
        this.nombre = nombre
        this.precio = precio
        this.genero = genero
        this.clasificacion = clasificacion
    }

    mostrar(){
        console.log(this.nombre, this.precio)
    }
}

class tienda{
    constructor(juegos){
        this.juegos = juegos
    }
}

const rainbow = new juego('Rainbow Six Siege', 49, 'FPS', '+18')
const rocket = new juego('Rocket League', 23, 'Deportes', '+13')
const csgo = new juego('Counter Strike GO', 0, 'FPS', '+18')

const tiendaNorte = new tienda([rainbow, rocket, csgo])

for(let i of tiendaNorte.juegos){
    console.log(i.mostrar())
}
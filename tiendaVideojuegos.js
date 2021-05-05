class juego {
    constructor (nombre, precio, genero, clasificacion) {
        this.nombre = nombre;
        this.precio = precio;
        this.genero = genero;
        this.clasificacion = clasificacion;
    }

    mostrar() {
        console.log(this.nombre, this.precio);
    }
}

class tienda {
    constructor (nombre, juegos) {
        this.nombre = nombre
        this.juegos = juegos;
    }
}

const rainbow = new juego('Rainbow Six Siege', 49, 'FPS', '+15');
const rocket = new juego('Rocket League', 23, 'Deportes', '+10');
const csgo = new juego('Counter Strike GO', 0, 'FPS', '+15');
const maincra = new juego('Minecraft', 99, 'Casual', '+5')
const among = new juego('Among us', 13, 'Casual', '+5')
const pes = new juego('eFootball PES 2021', 110, 'Deportes', '+15')
const gta = new juego('GTA V', 70, 'Accion','+15')
const roblox = new juego('Roblox', 39, 'Casual', '+10')
const fortnite = new juego('Fortnite', 0, 'FPS', '+15')
const outlast = new juego('Outlast', 49, 'Terror', '+15')
const alien = new juego('Alien Insolation', 49, 'Terror', '+15')
const geometry = new juego('Geometry Dash', 7, 'Casual', '+5')
const halflife = new juego('Half Life', 14, 'FPS', '+15')

const tiendas = []
tiendas.push(new tienda('Steam', [rainbow, rocket, csgo, maincra, among]))
tiendas.push(new tienda('Epic Store', [pes, gta, roblox, fortnite, outlast]))
tiendas.push(new tienda('EA Store', [alien, geometry, halflife, rainbow, rocket]))
tiendas.push(new tienda('PS Store', [csgo, among, halflife, gta, fortnite]))
tiendas.push(new tienda('Microsoft Store', [outlast, alien, maincra, gta, pes]))

/*for(let cont of tiendas){
    console.log(cont);
}*/

//Funcion para conocer en qué tiendas está disponible un juego indicado
const encontrarJuegoxTiendas = (nombreDeJuego) => {
    const respuesta = []
    for(let auxTiendas of tiendas){
        for(let auxJuegos of auxTiendas.juegos){
            if(auxJuegos.nombre === nombreDeJuego){
                respuesta.push(auxTiendas.nombre)
                break
            }
        }
    }
    console.log('encontrarJuegoxTiendas:', nombreDeJuego)
    console.log(respuesta)
    console.log()
    console.log()
}

//Funcion para listar los juegos disponibles de una tienda indicada
const listarJuegosxTienda = (nombreDeTienda) => {
    console.log('listarJuegosxTienda:', nombreDeTienda)
    for(let auxTiendas of tiendas){
        if(auxTiendas.nombre === nombreDeTienda){
            for(let auxJuegos of auxTiendas.juegos){
                console.log(auxJuegos)
            }
            break
        }
    }
    console.log()
    console.log()
}

//Funcion para listar juegos de cierta clasificacion y editar la misma
const listarJuegosxClasificacion = (nombreClasificacion, nuevaClasificacion) => {
    const respuesta = []
    for(let auxTiendas of tiendas){
        for(let auxJuegos of auxTiendas.juegos){
            if(auxJuegos.clasificacion === nombreClasificacion){
                auxJuegos.clasificacion = nuevaClasificacion
                respuesta.push({'nombre':auxJuegos.nombre, 'clasificacion':auxJuegos.clasificacion})
            }
        }
    }
    console.log('listarJuegosxClasificacion:',nombreClasificacion,' y cambiada a:', nuevaClasificacion)
    console.log(respuesta)
}

console.log()
encontrarJuegoxTiendas('GTA V')
listarJuegosxTienda('Steam')
listarJuegosxClasificacion('+15', 'Todas las edades')
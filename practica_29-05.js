/*1. Crear un arreglo con 20 números enteros entre 1 y 20; éstos números 
deben estar ordenados de manera aleatoria*/
const random = (inicio, fin) => {
    return Math.round((Math.random()*(fin-inicio))+inicio);
}

const arreglo1 = []
for(let i=0;i<20;i++){arreglo1.push(random(1,20));}
console.log("***************EJERCICIO 1***************");
console.log(arreglo1);
console.log();

/*2. Crear un arreglo de objetos con 50 elementos, dónde cada objeto represente 
una entidad de Película; la entidad contendrá los siguientes atributos: año, título, y género*/
class pelicula{
    constructor(titulo, año, genero){
        this.titulo = titulo;
        this.año = año;
        this.genero = genero;
    }
}

const peliculas = [];
peliculas.push(new pelicula("It 1", 2014, "Terror"));
peliculas.push(new pelicula("It 2", 2020, "Terror"));
peliculas.push(new pelicula("El Hombre Araña 1", 2000, "Ficcion"));
peliculas.push(new pelicula("El Hombre Araña 2", 2005, "Ficcion"));
peliculas.push(new pelicula("El Hombre Araña 3", 2010, "Ficcion"));
peliculas.push(new pelicula("Rapidos y furiosos 1", 2004, "Accion"));
peliculas.push(new pelicula("Rapidos y furiosos 2", 2006, "Accion"));
peliculas.push(new pelicula("Rapidos y furiosos 3", 2008, "Accion"));
peliculas.push(new pelicula("Un espia y medio", 2010, "Comedia"));
peliculas.push(new pelicula("Hercules", 2012, "Animados"));
peliculas.push(new pelicula("Pokemon Detective Pikachu", 2014, "Accion"));
peliculas.push(new pelicula("Bad Boys 3", 2016, "Accion"));
peliculas.push(new pelicula("Pokemon", 2018, "Animados"));
peliculas.push(new pelicula("Los indestructibles 2", 2020, "Accion"));
peliculas.push(new pelicula("Guason", 2022, "Drama"));
peliculas.push(new pelicula("Resident Evil 2", 2004, "Ficcion"));

/*3. Crear un arreglo de objetos con 10 elementos, dónde cada objeto represente una entidad
 de Plataforma de Streaming; la entidad contendrá los siguientes atributos: nombre, precio de subscripción*/
class plataforma{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.movies = [];
    }
}

const plataformas = [];
plataformas.push(new plataforma('Netflix', 8.50));
plataformas.push(new plataforma('PrimeVideo', 7.80));
plataformas.push(new plataforma('HBO GO', 8.00));
plataformas.push(new plataforma('Disney', 7.50));

/*5. Añadir de manera aleatoria 10 películas a cada elemento del arreglo 3, guardándolas bajo el atributo llamado "movies". 
Ninguna película puede repetirse en una misma plataforma de streaming, pero si es posible 
que una misma película exista en varias plataformas*/
console.log("***************EJERCICIO 5***************");
const aux = [];
for(let i=0;i<peliculas.length;i++){aux.push(i);}
var aux1 = [];

plataformas.forEach((itemPlataforma) => {
    aux.sort(() => Math.random() > 0.5 ? 1 : -1);
    aux1 = aux.slice(0,6);
    aux1.forEach((itemPelicula) => {itemPlataforma.movies.push(peliculas[itemPelicula])});
});
plataformas.forEach((elemento) => {console.log(elemento.nombre), console.table(elemento.movies), console.log()});

/*6. Crear una función que devuelva un arreglo, con las Plataformas de Streaming que contengan una película que será enviada como parámetro a la función. 
Dicho arreglo, deberá contener elementos objeto, con las siguientes propiedades: platform_name, subscription_price, movie_year*/
console.log("***************EJERCICIO 6***************");
const buscarPelicula = (nombrePelicula) => {
    return (plataformas.reduce((respuesta, plataforma) => {
        const peliculaEncontrada = plataforma.movies.find((pelicula) => {
            return pelicula.titulo === nombrePelicula;
        });
        if(peliculaEncontrada){respuesta.push({'Nombre': plataforma.nombre, 'Precio': plataforma.precio})}
        return respuesta;
    }, []))
}
console.table(buscarPelicula("It 1"));


/*
NOTAS:
crear funciones especifícas que tengan como propósito, dividir en tareas pequeñas los ejercicios.
Para cada ejercicio crear una función para que simplifique la revisión
Cambiar los parametros de las funciones por parametros nombrados
Hacer el ejercicio 4
Identar
Mejorar el tiempo de la busqueda usando un objeto
*/
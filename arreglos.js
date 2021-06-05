
console.log("1. Arreglo 100 primeros numeros naturales");
const arreglo1 = [];
for(let i=1; i<=100; i++){
    arreglo1.push(i);
}
console.log(arreglo1);
console.log();


console.log("2. Arreglo con todos los números pares ENTRE 100 y 200");
const arreglo2 = [];
for(let i=100; i<=200; i+=2){
    arreglo2.push(i);
}
console.log(arreglo2);
console.log();


console.log("3. Arreglo con todos los números impares ENTRE 200 y 300");
const arreglo3 = [];
for(let i=201; i<=299; i+=2){
    arreglo3.push(i);
}
console.log(arreglo3);
console.log();


console.log("4. Arreglo con los 100 primeros numeros primos");
function isCousin(numero){
    for(let i=2; i<=Math.sqrt(numero); i++)
        if(numero % i === 0) return false;
    return numero > 1;
}

const arreglo4 = [];
let j=2;
while(arreglo4.length<=100){
    if(isCousin(j)) arreglo4.push(j);
    j++;
}
console.table(arreglo4);
console.log();


console.log("5. Arreglo con los 50 primeros numeros fibonacci");
const arreglo5 = [0, 1];
for(let i=2; i<50; i++){
    arreglo5.push(arreglo5[i-1]+arreglo5[i-2]);
}
console.log(arreglo5);
console.log();


console.log("6. Suma de los elementos del primer arreglo");
console.log(arreglo1.reduce((suma, elemento) => {return suma+elemento}, 0));
console.log();


console.log("7. Arreglo nuevo con todos los numeros primos del tercer arreglo");
console.log(arreglo3.reduce((nuevo, elemento) => {
    if(isCousin(elemento)) nuevo.push(elemento)
    return nuevo;
}, []));
console.log();


console.log("8. Considerando los 5 arreglos previamente creados (los arreglos de los primeros 5 pasos), crear un nuevo arreglo que contenga EXCLUSIVAMENTE números impares");
const variosArreglos = [...arreglo1,...arreglo2,...arreglo3,...arreglo4,...arreglo5];
console.log(variosArreglos.reduce((soloImpares, elemento) => {
    if(elemento%2 === 1) soloImpares.push(elemento);
    return soloImpares;
}, []));

console.log("10. Con el arreglo del paso 5, regresar un nuevo arreglo que contenga los primeros 10 números pares de derecha a izquierda");
console.log(arreglo5.reverse().reduce((otroArreglo, elemento) => {

}, []));
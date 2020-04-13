let CantidadPersonas = prompt("Cuantas personas desea ingresar");
let ArrayPersona = [];
let ArrayEdad = [] ;

function sumaArray(total, num) {
    return total + num;
  }

for (i=1; i<=CantidadPersonas; i++){
    let NombrePersonas = prompt('ingresa el nombre de la '+ i +' persona');
    let EdadPersona   = Number(prompt('Ingresa la edad de la '+ i +' persona'));
    ArrayPersona.push(NombrePersonas);
    ArrayEdad.push(EdadPersona);
}
console.log(ArrayPersona);
alert("la suma de las edades es: " + ArrayEdad.reduce(sumaArray));
alert("El promedio de las edades es: " + ArrayEdad.reduce(sumaArray)/CantidadPersonas);

console.log("El total de las edades se obtiene por la suma de " + ArrayEdad + " que es igual a: " + ArrayEdad.reduce(sumaArray));
console.log("El promedio se obtiene por la suma de: "+ ArrayEdad + " dividido en "+ CantidadPersonas+" y se obtiene como resultado " + ArrayEdad.reduce(sumaArray)/CantidadPersonas);
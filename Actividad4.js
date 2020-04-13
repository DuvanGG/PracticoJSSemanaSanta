Palabra = prompt("Ingrese la palabra");

vocales = 'aeiou';
catidadVocales = 0;

for(i=0; i<Palabra.length; i++){
    for(j=0; j<vocales.length; j++){
        if(Palabra[i]==vocales[j]);
        catidadVocales++;
    }
}
console.log("La cantidad de vocales es: "+catidadVocales);
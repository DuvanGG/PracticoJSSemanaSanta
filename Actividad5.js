opcion = prompt("Seleccione la figura a hallar el area \n 1) cuadrado \n 2) rectangulo \n 3) triangulo escaleno o rectangulo\n 4) circulo" );

switch (opcion) {
    case "1":
        LadoCuadrado = Number(prompt("ingresa la medida del lado del cuadrado"));
        document.write("El area del cuadrado es: "+ LadoCuadrado*LadoCuadrado);
        break;

    case "2":
        Base = Number(prompt("Ingresa la medida de la base del rectangulo"));
        Altura = Number(prompt("Ingresa la medida de la altura del rectangulo"));
        document.write("El area del rectangulo es: "+ Base*Altura);
        break;

    case "3":
        Base = Number(prompt("Ingresa la medida de la base del triangulo escaleno o rectangulo"));
        Altura = Number(prompt("Ingresa la medida de la altura del triangulo escaleno o rectangulo"));
        document.write("El area del rectangulo es: "+ (Base*Altura)/2);
        break;

    case "4":
        pi= 3.14159;
        radio = Number(prompt("ingrese el valor del radio del circulo"));
        document.write("El area del circulo es: "+pi*(radio*radio));
        break;

    default:
        alert("No existe esa opcion");
        break;
}
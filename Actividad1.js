let NumeroIngresado = prompt("identifico si tu numero es negativo o positivo, ingresa tu numero:");

if(NumeroIngresado == 0){
    alert(`El numero ${NumeroIngresado} es un numero neutral`);
}else{
    if(NumeroIngresado > 0){
        alert(`El numero ${NumeroIngresado} es positivo`);
    }else{
        alert(`El numero ${NumeroIngresado} es negativo`);
    } 
}
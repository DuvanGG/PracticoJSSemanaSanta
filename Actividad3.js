cont = 0;
function contador(){
    
	var contador = document.getElementById("contador");
	contador.value = cont;
    cont++;
    
    if(cont == 60){
        alert("1 minuto competado");
        cont = 0;
    }
}

setInterval('contador()',1000);
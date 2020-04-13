for(i=1; i<=9; i=i+2){
    for(j=1; j<=i; j++)
    document.write("*");
    document.write("<br>");
}

for(i=9; i>=1; i=i-2){
    for(j=1; j<=i; j++)
    document.write("*");
    document.write("<br>");
}

document.write("-------------------------------------------------------<br>");

for(i=9; i>=1; i=i-2){
    for(j=1; j<=i; j++)
    document.write("*");
    document.write("<br>");
}

for(i=3; i<=9; i=i+2){
    for(j=1; j<=i; j++)
    document.write("*");
    document.write("<br>");
}

document.write("-------------------------------------------------------<br>");

cantidad = Number(prompt("Ingresa la cantidad para la figura #3"));
for(i=cantidad; i>=1; i=i-1){
    for(j=1; j<=i; j++)
    document.write("*");
    document.write("<br>");
}
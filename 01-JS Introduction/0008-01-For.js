//contar impar
function naoPareDeContarImparesAte(numero){
    var  impar = 0;
    for (i=0; i<numero; i++){
        if (i%2!=0) {
            impar++
        }
    }
    return impar;
}

//papagaio
var texto = "Kris";
function papagaio(texto){
    for (let i=0; i<5; i++){
        console.log(texto);
    }
}
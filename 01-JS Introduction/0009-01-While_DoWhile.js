//case 01
function tabelaDeMultiplicacao(numero) {
	var i = 1;
 	do {
		 console.log(numero+" * "+i+" = "+numero*i);
		 i++
	 }while (i<=10)
}

//case 02
function encontreUm5 (numeros){
    for (i=0;i<numeros.length;i++){
        if(numeros[i]==5){
            console.log("Encontramos um 5!")
            break
        }else{
            console.log(numeros[i])
        }
    }
}
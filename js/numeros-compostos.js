
function vetNumCompostosConvertidos() {

    var vet = "23+143+3345";
    var newVet = [];
    var vetConcat = '';
    var num, cont = 0;
    var tamanhoVet = vet.length - 1;

    for (var i = 0; i < vet.length; i++) {

        if (vet[i] == '+') {

            newVet[cont] = Number(vetConcat);
            newVet[cont + 1] = vet[i];
            vetConcat = '';
            cont += 2;
        } else {
            num = vet[i];
            vetConcat = vetConcat.concat(num);
            num = '';
            if (tamanhoVet == i) {
                newVet[cont] = Number(vetConcat);
            }
        }
    }
    
    return newVet;
}

//console.log(newVet);

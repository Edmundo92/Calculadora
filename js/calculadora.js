var container = document.querySelector(".container");
var tela = document.querySelector(".tela");
var telaResult = document.querySelector(".telaResult");
var imprimir = document.getElementById("imprimir");


var pegarValor, vRetornoComposto, vRetornoPolonesa, result;
var concatenarValores = '';

var vetorNumbers = [];

container.addEventListener("click", function (event) {

    pegarValor = event.target.getAttribute("value");

    if (pegarValor != null) {
        concatenarValores += pegarValor;
        tela.innerHTML = concatenarValores;
    } else {
        vRetornoComposto = vetNumCompostosConvertidos(concatenarValores);
        vRetornoPolonesa = transformPolonesa(vRetornoComposto);
        result = result(vRetornoPolonesa);
        
        telaResult.innerHTML = result;
    }

});




/*
    Esta funcão agrupa os números compostos e retorna um array já transformado
*/
function vetNumCompostosConvertidos(vet) {

    //var vet = "23+143+3345";
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
        }else if (vet[i] == '-') {

            newVet[cont] = Number(vetConcat);
            newVet[cont + 1] = vet[i];
            vetConcat = '';
            cont += 2;
        }else if (vet[i] == '*') {

            newVet[cont] = Number(vetConcat);
            newVet[cont + 1] = vet[i];
            vetConcat = '';
            cont += 2;
        }else if (vet[i] == '/') {

            newVet[cont] = Number(vetConcat);
            newVet[cont + 1] = vet[i];
            vetConcat = '';
            cont += 2;
        }else{
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

/*
    Transforma o Array em polonesa ou notação infixa
*/
function transformPolonesa(termo) {
    var vet = [];
    var sinal = [];


    for (var i = 0; i < termo.length; i++) {

        if (termo.length - 1 == i) {
            vet.push(parseInt(termo[i]));
            vet.push(sinal.pop());
        } else {
            if (parseInt(termo[i])) {
                vet.push(parseInt(termo[i]));
            } else {

                if (sinal.length == 0) {
                    sinal.push(termo[i]);
                } else {
                    vet.push(sinal.pop());
                    sinal.push(termo[i]);
                }
            }
        }

    }

    return vet;
}


/*
    Calcula e retorna o resultado
*/
function result(vet) {
    var newVet = [];
    for (var i = 0; i < vet.length; i++) {

        if (vet[i] == '+') {
            var s;
            s = soma(newVet);
            newVet.push(s);
        } else if (vet[i] == '-') {
            var x;
            x = sub(newVet);
            newVet.push(x);

        }else if (vet[i] == '*') {
            var x;
            x = multiplicacao(newVet);
            newVet.push(x);

        }else if (vet[i] == '/') {
            var x;
            x = divisao(newVet);
            newVet.push(x);

        }else {
            newVet.push(vet[i]);
        }

    }
    return newVet;
}


//soma
function soma(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    while(cont != 0){
        
        if(a == undefined){
            a = newVet.shift();
        }else{
            b = newVet.shift();
        }
        
        cont--;
    }
    return a + b;
}

//subtração
function sub(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    while(cont != 0){
        
        if(a == undefined){
            a = newVet.shift();
        }else{
            b = newVet.shift();
        }
        
        cont--;
    }
    return a - b;
}


//multiplicação
function multiplicacao(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    while(cont != 0){
        
        if(a == undefined){
            a = newVet.shift();
        }else{
            b = newVet.shift();
        }
        
        cont--;
    }
    return a * b;
}


//divisão
function divisao(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    while(cont != 0){
        
        if(a == undefined){
            a = newVet.shift();
        }else{
            b = newVet.shift();
        }
        
        cont--;
    }
    return a / b;
}

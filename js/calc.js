var termo = "5-2";
var vet = [];
var sinal = [];

for (var i = 0; i < termo.length; i++) {

    if (termo.length - 1 == i) {
        vet.push(parseInt(termo[i]));
        vet.push(sinal.pop());
    } else {
        if(parseInt(termo[i])) {
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
console.log("Termo -->   "+vet);
var newVet = [];
for (var i = 0; i < vet.length; i++) {

    if (vet[i] == '+') {
        var s;
        s = soma(newVet);
        newVet.push(s);
    }else if(vet[i] == '-'){
        var x;
        x = sub(newVet);
        newVet.push(x);
     
    } else {
        newVet.push(vet[i]);
    }

}

console.log("------------------");
console.log("New Vet -->  "+newVet);
function soma(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    console.log("Dentro de Soma  ->"+ newVet);
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

function sub(newVet) {
    var soma, a, b, cont;
    cont = newVet.length;
    console.log("Dentro de Subtração  ->"+ newVet);
    while(cont != 0){
        
        if(a == undefined){
            a = newVet.shift();
            console.log('a - '+ a);
        }else{
            b = newVet.shift();
            console.log('b - '+ b);
        }
        
        cont--;
    }
    return a - b;
}

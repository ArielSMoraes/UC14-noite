// //1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
function fibonacci(until) {
    //primeira forma
    until = until - 2;
    var listaFibonacci = [1, 2];

    // //segunda forma
    // var listaFibonacci = [];
    // listaFibonacci[0] = 1;
    // listaFibonacci[1] = 2;

    // //terceira forma
    // var listaFibonacci = [];
    // listaFibonacci.push(1);
    // listaFibonacci.push(2);

    for (var i = 1; i <= until; i++) {
        var atual = listaFibonacci[listaFibonacci.length - 1];
        var prev = listaFibonacci[listaFibonacci.length - 2];
        var next = atual + prev;

        listaFibonacci.push(next);
    }

    return listaFibonacci;
}


//exemplo 2
function fibonacci(quant) {
    var listFib = [1, 2];

    while (listFib.length < quant) {
        var prev = listFib[listFib.length - 1];
        var atual = listFib[listFib.length - 2];
        var proximo = prev + atual;
        listFib.push(proximo);
    }
    return listFib;
}
function multiplos3e5() {
    var todosNumeros = [];
    var soma = 0;

    for (var i = 1; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            todosNumeros.push(i)
        }
    }
    for (var i = 0; i < todosNumeros.length; i++) {
        soma = soma + todosNumeros[i];
    }
    return soma;
}
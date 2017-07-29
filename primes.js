function isPrime(number) {
    var prime = number != 1;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function getListaOfPrimes(countPrime) {
    var prime = [];
    primeToCheck = 2;

    while (prime.length < countPrime) {
        if (isPrime(primeToCheck)) {
            prime.push(primeToCheck);
        }
        primeToCheck++;
    }
    return prime
}

function nthPrime(nth) {
    var primesLista = getPrimes(nth);
    return primesLista[primesLista.length - 1];
}
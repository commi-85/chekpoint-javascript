//Écrivez une fonction pour calculer la factorielle d’un nombre donné
function Factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorielle = 1;
    for (let i = n; i > 1; i--) {
        factorielle =factorielle* i;
    }
    return factorielle;
}


//•	Vérification des nombres premiers : Créez une fonction pour vérifier si un nombre est premier ou non.

function NbrePremier(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true;
}


// En mathématiques, la suite de Fibonacci est une suite de nombres entiers dont chaque terme successif représente la somme des deux termes précédents, et qui commence par 0 puis 1. Ainsi, les dix premiers termes qui la composent sont 0, 1, 1, 2, 3, 5, 8, 13, 21 et 34.
function sequenceFibonacci(n) {
    let fibonacci = [0, 1];
    let i
    for (i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(0, n); // Retourne les n premiers termes
}



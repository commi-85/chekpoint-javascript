//•	Trouver le maximum et le minimum : Écrivez des fonctions pour trouver les valeurs maximum et minimum dans un tableau de nombres

function maximum(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}



function minimum(tabler) {
    let min = tabler[0];
    for (let i = 1; i < tabler.length; i++) {
        if (tabler[i] < min) {
            min = tabler[i];
        }
    }
    return min;
}

//•	Somme du tableau : créez une fonction qui calcule la somme de tous les éléments d’un tableau.


function sommeTab(tab) {
    let x = 0;
    for (let i = 0; i < tab.length; i++) {
        x= x+tab[i]
    }
    return x;
}

//•	Filter Array : implémente une fonction qui filtre les éléments d’un tableau en fonction d’une condition donnée.

function NbresPairs(paire) {
    return paire.filter(function (nombre) {
        return nombre % 2 === 0;
    });
}
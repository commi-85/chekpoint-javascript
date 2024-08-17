//fonction pour inverser une chaine de caractére

function inversion(Ncaratere,) {
    return Ncaratere.split('').reverse().join('')
}
// verfions la fct inverse
let Ncaratere = "Bonjour, comment ça va?"
let division = inversion(Ncaratere)
console.log(division)



//•	Compter les caractères : créez une fonction qui compte le nombre de caractères d’une chaîne.


function compteur(nomCarat) {
    return nomCarat.length;
}

// verfions la fct compteur
let nomCarat = "Bonjour tout le monde";
let nombreCaracteres = compteur(nomCarat);
console.log(nombreCaracteres);


//•	Mettre les mots en majuscules : Implémentez une fonction qui met en majuscule la première lettre de chaque mot d’une phrase.

function majuscule(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

// verification de la fct majuscule
let phrase = "fatou kine sanghare";
let resultat = majuscule(phrase);
console.log(resultat);
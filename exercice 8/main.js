let student = {
  name: "Émilie",
  favoriteFood: "Huoguo",
  city: "Paris",
};

let result = 0;

let values = Object.values(student); // on transfome l'object student en array values

console.log(values); // on affiche l'array

// méthode simple

values.forEach((value) => {
  result += value.length; // result = result + value.length
});

console.log(result);

// méthode complexe

result = 0;
result = values.reduce((acc, value) => acc + value.length, 0);

console.log(result);

console.log(`Le résultat est ${result}`); // L'interpolation
console.log ('Le résultat est ' + result); // La concatération

// vérifier si le résultat est pair ou impair

if (result % 2) { // % 2 renvoie 0 = faux ou 1 = vrai
  console.log("impair");
} else {
  console.log("pair");
}

// Méthode Termaire
console.log(`Le résultat est ${result % 2 ? 'impair' : 'pair'}`);
// condition ? vrai : faux
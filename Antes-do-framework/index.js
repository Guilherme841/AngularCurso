// IMPORTAR TUDO DE UM ARQUIVO PRA UMA VARIAVEL

// import * as allMath from './lib/math.js'
// console.log(allMath)

// NAMED EXPORT
// SEMPRE IMPORTO COM O MESMO NOME QUE EXPORTEI
import { soma } from "./lib/math.js";
import { User as userClass } from "./lib/math.js";

console.log(soma(1, 1));

const userClasse = new userClass("fulano", 20, 1.80);
console.log(JSON.stringify(userClasse));
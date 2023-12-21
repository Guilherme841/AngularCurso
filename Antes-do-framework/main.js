// let idade = null;

// 0, '', undefined, [], false, null => falsy(valores invalidos pro ||)
// undefined, null => (valores invalidos pro ??)

// document.body.innerText = "Idade: " + (idade ?? "Não informado");

// Objetos

let pessoa = {
  nome: "fulano",
  idade: 19,
  peso: 66,
  sobrenome: "ciclano",
  celular: 900,
  conta: "corrente",
  // email: "def@gmail.com",
  endereço: {
    rua: "tal",
    numero: 7,
    cep: 11234345,
  },
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;
// desestruturação melhorar isso:

// Desestruturação | posso fazer dentro de funções

function mostraConta({ conta }) {
  return conta;
}
// document.body.innerText = mostraConta(pessoa);

const { celular, conta } = pessoa;
const { nome, idade: age } = pessoa; // mudar nome da variavel
const { peso, sobrenome, email = "abc@gmail.com" } = pessoa; // valor padrão
// document.body.innerText = (JSON.stringify({peso, sobrenome, email}))
// document.body.innerText = ("nome" in pessoa); true
// document.body.innerText = (Object.keys(pessoa));  retorna chaves do objeto [array]
// document.body.innerText = (Object.values(pessoa)); retorna valores do objeto [array]
// document.body.innerText = (JSON.stringify(Object.values(pessoa))); retorna valores em JSON
// document.body.innerText = (JSON.stringify(Object.entries(pessoa))); retorna array aninhado com chave e valor

// Rest operator

// const { idade, ...rest } = pessoa;
// document.body.innerText = JSON.stringify(rest); retorna o resto menos a que ja selecionei

let array = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = array;
const [first, second, , ...rest] = array; // pulei um elemento colocando uma virgula vazia

// document.body.innerText = rest

// Short syntax

const name = "riquelme";
const lastname = "felk";

const user = {
  name,
  lastname,
};

// document.body.innerText = JSON.stringify(user);

// Optional chaining tal?.tal?.tal

const usuario = {
  nickname: "ciclano",
  username: "ciclaneide",
  token: {
    pass: 1111111,
    id: "admin",
    zip: {
      code: 904823,
      city: "BC",
    },
    city() {
      return usuario.token.zip.city;
    },
  },
};

// document.body.innerText = usuario.token?.zip?.code ?? "Não informado"; [?] pra verificar se tem a chave.
// document.body.innerText = usuario.token?.city?.() ?? "Função inexistente" [?.] antes da call da função.

// pesquisa por chave do objeto com variavel abaixo. posso usar tmb optional chaining antes do index com chave
const key = "data";
// document.body.innerText = JSON.stringify(usuario?.[key] ?? "Chave inexistente");

// MÈTODOS DE ARRAY

// 1º forma de percorrer array FOR
for (let a of array) {
  // document.body.innerText += a;
}

// 2º forma forEach
array.forEach((b) => {
  // document.body.innerText += b
});
// 3º com map, com map consigo fazer o retorno de dentro dele e amarzenar
// MAP SEMPRE RETORNA UM ARRAY COM O MESMO TAMANHO

let novoArray = array.map((c) => {
  if (c % 2 === 0) {
    return c * 2;
  } else {
    return c;
  }
});

// FILTER
// NÃO ALTERA VALOR, APENAS PEGA UM PEDAÇO DADO A CONDIÇÂO
// POSSO JUNTAR METEDOS DE ARRAY
const novoArray2 = array.filter((d) => d % 2 === 0).map((d) => d * 10);

// EVERY
// RETORNA TRUE SE TODOS OS ITEMS PASSAREM NUMA CONDIÇÃO E RETORNA BOOLEAN
const novoArray3 = array.every((e) => typeof e === "number");

// SOME
// VARIFICA SE UM ITEM SATISFAZ UMA CONDIÇÃO E RETORNA BOOLEAN
let novoArray4 = array.some((f) => {
  return typeof f === "number";
});

// FIND
// SERVE PRA ENCONTRAR UM ITEM DO ARRAY, SELECIONA O PRIMEIRO ITEM VERDADEIRO DA CONDIÇÃO
let novoArray5 = array.find((g) => g % 2 === 0);

// FINDINDEX
// RETORNA O INDICE DO VALOR SELECIONADO COM A CONDIÇÃO
let novoArray6 = array.findIndex((h) => h % 2 === 0);

// REDUCE
// TRANFORMAR O ARRAY A PARTIR DO MESMO
// RECEBE UM SEGUNDO PARAMETRO COM VALOR INICIAL DA NOVA ESTRUTURA DE DADOS. exemplo 0, {}, [], CHAMADO DE ACCUMULATOR(ACC)
// ESPERA RETORNO DO NOVO VALOR DO ACCUMULATOR(ACC)
let novoArray7 = array.reduce((acc, i) => {
  return acc + i;
}, 0);

// TEMPLATE LITERALS
let firstname = "Riquelme";
let message = `Bem-vindo, ${firstname ?? "Visitante"}`;

// PROMISSES
// PROMESSA DE QUE ALGO VAI ACONTECER OU VAI DAR ERRADO
// RECEBE DOIS PARAMETROS (resolve, reject)
// RESOLVE SENDO QUE DEU TUDO CERTO
// E REJECT DEU TUDO ERRADO
// metodos .then, .catch e .finally()
// FINALLY EXECUTA INDEPENDENTE DO .THEN E .CATCH, EXECUTA SEMPRE NO FINAL DA PROMISSE SER RESOLVIDA OU REJEITADA

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   }) // .then coluna CORRETO!
//   .then((body) => {
//     console.log(JSON.stringify(body));
//   })
// .then(response => {
//     response.json().then(body => {        // .then ANINHADO ERRADO!
//         console.log(JSON.stringify(body))
//     })
// })
//   .catch((err) => {
//     console.log("Deu ruim!", err);
//   })
//   .finally(() => {
//     return console.log("Finally executado");
//   });

async function buscaApi() {
  // FUNÇÃO ASYNC VIRA AUTOMATICAMENTE UMA PROMISSE
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1` // SÓ VAI CONTINUAR DPS DO FETCH
    );
    const body = await response.json(); // resonse.json() retorna uma promisse (uso do await)
    return body.id;
  } catch (err) {
    console.log("Deu erro", err);
  } finally {
    // console.log("Finally executado!");
  }
}

buscaApi().then((response) => {
  // document.write(response)
});

// let esperaPromessa = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1500);
//   });
// };

// esperaPromessa(1,1)
//     .then(soma => {
//         document.body.innerText = soma;
//     })
//     .catch(err => {
//         console.log("Deu ruim!", err)
//     })


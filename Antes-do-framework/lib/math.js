export function soma(a, b) {
  return a + b;
}

export class User {
  constructor(nome, idade, altura) {
    this._nome = nome;
    this._idade = idade;
    this._altura = altura;
  }
  get nome() {
    return this._nome;
  }
  set nome(valor) {
    this._nome = this._nome = valor;
  }
}

/* 
  Crie um objeto com os seus dados pessoais.
  Deve possui pelo menos duas propriedades nome e sobrenome.
  Crie um método que mostre o seu nome completo.
*/

var dadosPessoais = {
  nome: "Walter",
  sobrenome: "Barcellos",
  profissao: "sofredor na infraestrutura",
  expectativa: "virar dev brabo",
  retornaNomeCompleto() {
    return `${this.nome} ${this.sobrenome}.`;
  },
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

/* 
  Crie um objeto de um cachorro que represente um labrador, 
  preto com 10 anos, que late ao ver um homem.
*/

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  homem: true,
  latir() {
    if (this.homem) {
      console.log("latiu");
    } else {
      console.log("ficou comportado");
    }
  },
};

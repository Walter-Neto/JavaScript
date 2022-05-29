/*
  FOREACH
  Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});
console.log("");

/*
  PARÂMETROS DO FOREACH
  O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;
*/
imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual);
  console.log(index);
  console.log(array);
});
console.log("");

/*
  FOREACH E ARRAY
  forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em um array.
*/

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);
titulosArray.forEach(function (item) {
  console.log(item);
});
console.log("");

/*
  ARROW FUNCTION
  Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após o argumento.
*/

imgs.forEach((item) => {
  console.log(item);
});

/*
  ARGUMENTOS E PARÊNTESES
  Para argumento único, não existe obrigação de utilizar parênteses. Já para multiplos argumentos a sintaxe com parênteses é obrigatória.

  É MELHOR UTILIZAR. O CÓDIGO FICA MAIS FÁCIL DE LER.
*/

// argumento único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

/*
  RETURN
  É possível omitir as chaves {} para uma função que retorna apenas uma linha.
  Desse modo, não é permitido fechar a linha com ;
*/

imgs.forEach((item) => console.log(item));

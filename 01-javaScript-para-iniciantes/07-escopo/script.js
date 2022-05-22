/* 
  ESCOPO DE FUNÇÃO
  Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
  Escopo evita o conflito entre nomes.
*/

function mostrarFord() {
  var carro = "Ford";
  console.log(carro);
}

mostrarFord(); //Ford no console
// console.log(carro); // Erro, carro is not defined

/*
  VARIÁVEL GLOBAL (ERRO)
  Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
*/

function mostrarFusca() {
  carro = "Fusca";
  console.log(carro);
}

mostrarFusca(); // Fusca
console.log(carro); // Fusca

/*
  ESCOPO DE FUNÇÃO (PAI)
  Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
*/

var carro = "Audi";

function mostrarCarroGlobal() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarroGlobal(); // Meu carro é um Audi
console.log(carro); // Audi

/*
  ESCOPO DE BLOCO
  Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
*/

if (true) {
  var carro = "Fiat"; //Essa var vazou o escopo e sobrescreveu a var carro que foi defiinda na linha 33
  console.log("var carro sendo chamada por dentro do bloco if: " + carro);
}
console.log("var carro vazando bloco if: " + carro); // Fiat

/*
  CONST E LET NO LUGAR DE VAR
  A partir de agora vamos utilizar apenas const e let para declarmos variáveis.
*/
if (true) {
  const carrito = "Maserati";
  console.log("const carrito definida em bloco de if(CORRETO): " + carrito);
}
// console.log(carrito); // erro, carrito is not defined

/*
  {} CRIA UM BLOCO
  Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
*/

{
  var carro = "Ferrari"; // Vazou o bloco e sobrescreveu o que foi definido na linha 49.
  const ano = 2018;
}

console.log("var carro vazando bloco: " + carro);
// console.log(ano); //erro, ano is not defined porque const não vaza bloco.

/*
  FOR LOOP 
  Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.
*/

for (var num = 0; num < 10; num++) {
  console.log(`num ${num}`);
}
console.log("vazou:" + num); // 10

/*
  FOR LOOP COM LET
  Com o let evitamos que o número vaze.
*/

for (let i = 0; i < 10; i++) {
  console.log(`i: ${i}`);
}
// console.log(i); // i is not defined

/*
  CONST
  Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
*/

const mes = "dezembro";
// mes = "Janeiro"; //Apresenta erro por tentar modificar uma constante.
// const semana; //erro, delcarou sem valor. Uma const precisa ser declarada com valor.

const data = {
  dia: 19,
  mes: "Maio",
  ano: 2022,
};

console.log(data.dia);
// data = 'Janeiro'; // Erro

/*
  LET
  Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
*/

let ano;
ano = 2022;
ano++;
console.log(ano); //2023

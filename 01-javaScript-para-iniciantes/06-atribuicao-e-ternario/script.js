/*
  COMENTÁRIOS
  Servem para explicar o código
  Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.
*/

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// var nome = 'Walter';

/*
  OPERADORES DE ATRIBUIÇÃO
  Podem funcionar como formas abreviadas
*/

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

/*
  OPERADOR TERNÁRIO
  Abreviação de condicionais com if e else
*/

var idade = 31;
var podeBeber = idade >= 18 ? "Pode beber." : "Não pode beber.";
console.log(podeBeber);

/*
  Estrutura é  composta de condição ? true : false
  Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
*/

/*
  IF ABREVIADO
  Não é necessário abrir e fechar chaves {} quando retornamos apenas uma linha de código.
*/

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade.");
else console.log("Não possui faculdade");

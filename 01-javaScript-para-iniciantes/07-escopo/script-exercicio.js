// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas); // 1- Porque var é uma palavra reservada da linguagem e não uma variável. 2- const e o let respeitam o escopo de bloco, teria que mover esse console.log para dentro do bloco para funcionar.

// Como corrigir o erro abaixo?
function somarDois(x) {
  dois = 2; //estava declarada como const. Trei a especificação da declaração e tornei ela global. Poderia também mover como const para fora do bloco.
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log("somarDois: " + somarDois(4));
console.log("dividirDois: " + dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

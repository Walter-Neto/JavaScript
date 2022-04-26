// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(parametro) {
  if (parametro) {
    return "É truthy";
  } else {
    return "Falsy";
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
function areaQuadrado(lado) {
  return lado + lado + lado + lado;
}

// Crie uma função que retorne o seu nome completo
function dados(nome, sobrenome) {
  var nome = nome;
  var sobrenome = sobrenome;
  return `O nome informado foi ${nome} ${sobrenome}.`;
}

// Crie uma função que verifica se um número é par
function isItEven(numero) {
  if (typeof numero !== "number") {
    console.log("O valor informado é inválido.");
  } else {
    if (numero % 2 === 0) {
      return `${numero} é par.`;
    } else {
      return `${numero} é ímpar.`;
    }
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipo(dado) {
  return `O tipo de ${dado} é ${typeof dado}`;
}

/*
 addEventListener é uma função nativa do JavaScript.
 Observação: o primeiro parâmetro é o evento que ocorre e o segundo o Callback.

 utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
*/
addEventListener("scroll", function () {
  return console.log(dados("Walter", "Neto"));
});

/* Corrija o erro abaixo:
  function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
  precisoVisitar(20);
  jaVisitei(20);
*/

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

//A variável totalPaises estava no escopo da funlçao precisoVisitar e estava tentando ser acessada pela função jaVisitei. Bastou mover para o escopo global e o erro foi resolvido.

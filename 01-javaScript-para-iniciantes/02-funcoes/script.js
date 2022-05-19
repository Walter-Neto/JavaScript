/*
  FUNÇÕES
  Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
  */

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //16
console.log(areaQuadrado(5)); //25
console.log(areaQuadrado(6)); //36

//Função que pode ser executada sem passagem de parâmetro
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

//Função que recebe parâmetros em sua chamada
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(95, 1.72)); //32.11195240670633
console.log(imc(95, 1.9)); //26.315789473684212

/*
  PARÊNTESES EXECUTA A FUNÇÃO
  Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer. Exemplo abaixo:
  */
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta de azul.";
  } else if (cor === "verde") {
    return "Você gosta de verde";
  } else {
    return "Você não gosta de nada. xD";
  }
}
corFavorita; // Nesse caso nada acontece, pois a função não está sendo chamada.
corFavorita(); // retornaria 'Você não gosta de nada'.

/*
  ARGUMENTOS PODEM SER FUNÇÕES
  Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
  
  Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
*/
addEventListener("click", function () {
  console.log("Clicou");
});

/*
  PODE OU NÃO RETORNAR UM VALOR
  Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
*/
function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}
imc2(95, 1.72); // retorna o imc
console.log(imc2(95, 1.72)); // retorna o imc e undefined

/*
  VALORES RETORNADOS
  Uma função pode retornar qualquer tipo de dado e até outras funções.

  OBSERVAÇÃO: 
  Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
*/
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

/*
  ESCOPO
  Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
*/
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda falta visitar ${totalPaises - paisesVisitados} países.`;
}

/*
  ESCOPO LÉXICO
  Funções conseguem acessar variáveis que foram criadas no contexto pai
*/

var profissao = "Assistente de TI :T";
function dados() {
  var nome = "Walter";
  var idade = 31;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 359;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'Walter, 359, Rio de Janeiro, Assistente de TI :T'
outrosDados(); // retorna um erro

/*
  HOISTING
  Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
  Como se todas as variáveis globais fossem para o topo do código e estivessem como undefined.
*/

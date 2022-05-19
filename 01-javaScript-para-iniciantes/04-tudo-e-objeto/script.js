/*
  TUDO É OBJETO
  Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
*/

var nome = "Walter";
console.log(nome.length);
console.log(nome.charAt(5));
console.log(nome.replace("ter", "teco"));

//Uma string herda propriedades e métodos do construtor String()

/*
  NÚMEROS
  Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.
*/

var altura = 1.8;
console.log(altura.toString());
console.log(altura.toFixed());

//FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

console.log(areaQuadrado.length); // 1

/*
  ELEMENTOS DO DOM
Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
*/

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

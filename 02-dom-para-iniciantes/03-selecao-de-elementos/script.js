/*
  ID 
  getElementById seleciona e retorna elementos do DOM
*/

const animaisSection = document.getElementById("animais");
console.log(animaisSection);

const contatoSection = document.getElementById("contato");
console.log(contatoSection);

const naoExiste = document.getElementById("teste");
console.log(naoExiste);

/*
  ClASSE E TAG
  getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
*/

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
// Retorna o primeiro elemento
console.log(gridSection[0]);

const contato = document.getElementsByClassName("grid-section contato");
console.log(contato);

const ul = document.getElementsByTagName("ul");
console.log(ul);

/*
  SELETOR GERAL ÚNICO
  querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
*/

const animais = document.querySelector(".animais");
console.log(animais);

const contatoId = document.querySelector("#contato");
console.log(contatoId);

const ultimoItem = document.querySelector(".animais-lista li:last-child");
console.log(ultimoItem);

const linkCSS = document.querySelector('[href^="https://"]');
console.log(linkCSS);

const primeiroUl = document.querySelector("ul");
console.log(primeiroUl);

const navItem = primeiroUl.querySelector("li");
console.log(navItem);

/*
  SELETOR GERAL LISTA
  querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

  Diferente do getElementsByClassName, a NodeList retornada com querySelectorAll é estática.
*/

const gridSectionQs = document.querySelectorAll(".grid-section");
console.log(gridSectionQs);

const listas = document.querySelectorAll("ul");
console.log(listas);

const titulos = document.querySelectorAll(".titulo");
console.log(titulos);

const fotosAnimais = document.querySelectorAll(".animais-lista img");
console.log(fotosAnimais);

/*
  HTMLCOLLECTION VS NODELIST
  A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
*/

const titulo = document.querySelector(".titulo");
console.log(titulo);
const gridSectionHTML = document.getElementsByClassName("grid-section");
console.log(gridSectionHTML);
const gridSectionNode = document.querySelectorAll(".grid-section");
console.log(gridSectionNode);

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

/*
  ARRAY-LIKE
  HTMLCollection e NodeList são array-like, parecem um array mas não são. O método de array, forEach() por exemplo, existe apenas em NodeList.

  É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSectionArrayLike)
*/

const gridsectionArrayLike = document.querySelectorAll(".grid-section");

gridsectionArrayLike.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index);
  console.log(array);
});

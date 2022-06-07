/*
  HEIGHT E WIDTH
  Estas são propriedades e métodos dos objetiso Element e HTMLElement, a maioria delas são "read only".
*/

const section = document.querySelector(".animais-lista");
console.log(section.clientHeight); // Retorna height + padding
console.log(section.offsetHeight); // Retorna height + padding + border
console.log(section.scrollHeight); // Height total, mesmo dentro de scroll
console.log("");

// As mesmas propriedades acima se aplicam para width

console.log(section.clientWidth); // Retorna height + padding
console.log(section.offsetWidth); // Retorna height + padding + border
console.log(section.scrollWidth); // Height total, mesmo dentro de scroll
console.log("");

/*
OFFSETTOP E OFFSETLEFT
*/

const offSetTopOffSetLeft = document.querySelector(".animais-lista");
console.log(offSetTopOffSetLeft.offsetTop); // Distância entre o topo do elemento e o topo da página
console.log(offSetTopOffSetLeft.offsetLeft); // Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log("");

/*
  GETBOUNDINGCLIENTRECT()
  Método que retorna um objeto com valores de width, height, distância do elemento e mais.
*/

const rect = section.getBoundingClientRect();
console.log(rect.height); // height do elemento
console.log(rect.width); // width do elemento
console.log(rect.top); // distância entre o topo do elemento e o scroll
console.log("");

/*
  WINDOW
*/

console.log(window.innerWidth); // width do janela
console.log(window.outerWidth); // soma dev tools também
console.log(window.innerHeight); // height do janela
console.log(window.outerHeight); // soma a barra de endereço
console.log("");

console.log(window.pageYOffset); // distância total do scroll vertical
console.log(window.pageXOffset); // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

/*
  MATCHMEDIA();
  Utilize um media-querie como no CSS para verificar a largura do browser
*/

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

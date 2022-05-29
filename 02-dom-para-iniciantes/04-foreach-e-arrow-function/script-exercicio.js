// Mostre no console cada parágrado do site
const todosParagrafos = document.querySelectorAll("p");
console.log(todosParagrafos);
// Mostre o texto dos parágrafos no console
todosParagrafos.forEach((i) => {
  console.log(i.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index, "aqui");
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

// nomeie 3 propriedades ou métodos de strings
var nome = "Walter";
// nome.charAt(3);
// nome.concat(" Barcellos");
// nome.endsWith("hmm");

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// btn.addEventListener
// btn.appendChild
// btn.ariaSelected
// btn.appendChild
// btn.after

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var btn = document.querySelector("#btn");
btn.addEventListener("click", copyText);
function copyText() {
  navigator.clipboard.writeText(btn.innerText);
}

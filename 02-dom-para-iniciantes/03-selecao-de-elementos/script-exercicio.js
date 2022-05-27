// Retorne no console todas as imagens do site
const img1 = document.getElementsByTagName("img");
console.log(img1);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img2 = document.querySelectorAll('[src^="img/im"]');
console.log(img2);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
// Array.from(ultimoP);
console.log(ultimoP[ultimoP.length - 1]);

// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImg = document.querySelector("img").offsetTop;
console.log(primeiraImg);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let totalWidth = 0;
  imagens.forEach((imagem) => {
    totalWidth += imagem.offsetWidth;
  });
  console.log("Soma da largura de todas imagens = ", totalWidth);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google);

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  console.log("L:", link, "H:", linkHeight, " W:", linkWidth);
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log("Possui boa acessibilidade.");
  } else {
    console.log("Não possui boa acessibilidade.");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu.

const smallBrowser = window.matchMedia("(max-width: 720px)").matches;
console.log(smallBrowser);
if (smallBrowser) {
  console.log("Browser menor que 720px.");
} else {
  console.log("Browser maior que 720px.");
}

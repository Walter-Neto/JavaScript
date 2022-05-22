// Retorne o url da página atual utilizando o objeto window
console.log(location.href);

// Seleciona o primeiro elemento da página que possua a classe ativo. 
var primeiroH1 = document.querySelector('.ativo').innerText;
console.log(primeiroH1);

// Retorne a linguagem do navegador
console.log(document.documentElement.lang);
console.log(window.navigator.language); 

// Retorne a largura da janela 
console.log(document.documentElement.clientWidth);
console.log(window.innerWidth);


/*
  DOM - Document object model
  É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
*/



// window é o objeto global do browser, possui diferentes métodos e propriedades.
console.log(window);
console.log(window.innerHeight); // retorna a altura do browser

/*
  WINDOW E DOCUMENT
  São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

  Window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Desse modo funciona pois o window é global.

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

/*
  NODE

*/

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callback(){
  console.log('Clicou em ', titulo.innerText);
}

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

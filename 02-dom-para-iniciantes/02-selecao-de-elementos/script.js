/*
  ID
  getElementById seleciona e retorna elementos do DOM
*/

// Seleciona pelo ID
const animaisSection = document.getElementById('animais').innerText;
console.log(animaisSection);
const contatoSection = document.getElementById('contato').innerText;
console.log(contatoSection);

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');
console.log(naoExiste);

/*
  CLASSE E TAG
  getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
*/

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

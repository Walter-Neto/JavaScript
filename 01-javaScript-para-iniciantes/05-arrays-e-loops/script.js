/*
  Arrays
  É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

  Acesse um elemento da array utilizando [n]
*/

var videoGames = ['switch', 'xbox', 'nintendo'];
console.log(videoGames[0]);

/*
  Métodos e Propriedades de uma Array
  Existem diversos outros métodos, como map , reduce , forEach e mais que veremos mais à frente.
*/

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

/*
  For Loop
  Fazem algo repetidamente até que uma condição seja atingida.

  O for loop possui 3 partes, início , condição e incremento.
*/

for(numero = 0; numero < 11; numero++){
  console.log(numero);
}

/*
  While loop
  O for loop é o mais comum.
*/

var i = 0;
while(i < 10){
  i++;
  console.log(i);
}

/*
  Break
  O loop irá parar caso encontre a palavra break.
*/

var consoles = ['ps4','xbox','nintendo','psp'];
for(i=0; i < consoles.length; i++){
  console.log(consoles[i]);
  if(consoles[i] === 'xbox'){
    break;
  }
}

/*
  Foreach
  forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like).
*/

// O argumento item será atribuído dinamicamente
var num = ['1', '2', '3', '4'];
num.forEach(function(item) {
 console.log(item);
});
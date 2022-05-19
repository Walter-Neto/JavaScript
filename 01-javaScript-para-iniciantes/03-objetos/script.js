/*
  OBJETOS
  Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

  Propriedades e métodos consistem em nome (chave) e valor.
*/

var pessoa = {
  nome: "Walter",
  idade: 28,
  profissao: "Desenvolverdor JS",
  possuiFaculdade: true,
};

pessoa.nome; // 'Walter'
pessoa.possuiFaculdade; // true

/*
  MÉTODOS
  É uma propriedade que possui uma função no local do seu valor
*/

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

/*
  MÉTODOS
  Abreviação de area: function() {} para area() {}, no ES6+
*/

var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

/*
  ORGANIZAR O CÓDIGO
  Objetos servem para organizar o código em pequenas partes reutilizáveis.
*/

Math.PI; // 3.14
Math.random; // Retornará um número aleatório

// Math é um objeto nativo de JavaScript. Podemos notar que console é um objeto e log() um método.

/*
  DOT NOTATION GET
  Acesse propriedades de um objeto utilizando o ponto '.'
*/

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};
var bg = menu.backgroundColor;

/*
  DOT NOTATION SET
  Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
*/

var menu2 = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu2.backgroundColor = "#000";
console.log(menu2.backgroundColor); // '#000'

/*
  ADICIONAR PROPRIEDADES E MÉTODOS
  Basta adicionar um novo nome e definir o valor.
*/

var menu3 = {
  width: 800,
};

menu3.height = 50;
menu.position = "fixed";

/*
  PALAVRA-CHAVE THIS
  this irá fazer uma referência ao próprio objeto.
*/

var height = 120;
var menu4 = {
  width: 800,
  height: 170,
  metadeHeight() {
    return this.height / 2;
  },
};
menu4.metadeHeight(); // 85
// sem o this, seria 60

/* 
  PROTÓTIPO E HERANÇA 
  O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/

var menu5 = {
  width: 800,
};

// hasOwnProperty é um método de Object

menu5.hasOwnProperty("width"); //true
menu5.hasOwnProperty("height"); //false

/*
 BOOLEAN
 Existem dois valores booleanos false ou true.
*/

var possuiGraduacao = true;
var possuiDoutorado = false;

/*
  CONDICIONAIS IF E ELSE
  Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
*/

if (possuiGraduacao) {
  console.log("Possui graduação.");
} else {
  console.log("Não possui graduação.");
}

/*
  CONDICIONAIS ELSE IF
  Se o if não for verdadeiro, ele testa o else if que é um segundo teste de verdadeiro ou falso.
*/

if (possuiDoutorado) {
  console.log("Possui doutorado.");
} else if (possuiGraduacao) {
  console.log("Possui graduação mas não possui doutourado.");
} else {
  console.log("Não possui graduação.");
}

/* 
SWITCH
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Gosto de azul.");
    break;

  case "Vermelho":
    console.log("Gosto de vermelho.");
    break;

  case "Verde":
    console.log("Gosto de verde.");
    break;

  default:
    console.log("Não me importo com a diferença de cores.");
}

/* 
TRUTHY E FALSY
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
*/

//Exemplos de Falsy
if (false);
if (0);
if (-0);
if (NaN);
if (null);
if (undefined);
if ("");
if ("");
if (``);

//Exemplos de Truthy
if (true);
if (1);
if (" ");
if (" ");
if (` `);
if ("Walter");
if (-5);
if ({});

/*
OPERADOR LÓGICO DE NEGAÇÃO !
O operador !, nega uma operação booleana. Ou seja, !true é igual a false
*/

//Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

if (!true); //false
if (!1); //false
if (!""); //true
if (!undefined); //true
if (!!" "); //true
if (!!""); //true

/*
  OPERADORES DE COMPARAÇÃO
  Vão sempre retornar um valor booleano
*/

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/*
  OPERADORES DE COMPARAÇÃO
  O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
 */

10 == "10"; //true
10 == 10; //true
10 === "10"; //false
10 === 10; //true
10 != 15; //true
10 != "10"; //false
10 !== "10"; //true

/*
  OPERADORES LÓGICOS &&
  && Compara se uma expressão e a outra é verdadeira

  OBSERVAÇÃO:
  Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
*/

true && true; //true
true && false; //false
false && true; //false
"Gato" && "Cão"; // 'Cão'(true)
5 - 5 && 5 + 5; // 0(false)
"Gato" && false; //false
5 >= 5 && 3 < 6; //true

/*
  OPERADORES LÓGICOS ||
  || Compara se uma expressão ou outra é verdadeira

  OBSERVAÇÃO:
  Retorna o primeiro valor true que encontrar
*/

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

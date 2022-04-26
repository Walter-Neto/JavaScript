// 1- Verifique se a sua idade é maior do que a de algum parente

// 2- Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// 3- Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // 3

// 4- Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Walter"; //Truthy
var idade = 31; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// 5- Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log(
    `O Brasil com aproximadamente ${brasil} milhões de habitantes é mais populoso que a china.`
  );
} else {
  console.log(
    `A China com aproximadamente ${china} milhões de habitantes é mais populosa que o Brasil.`
  );
}

// 6- O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} //Falso

// 7- O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} //Cão

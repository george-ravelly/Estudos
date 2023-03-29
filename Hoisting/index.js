/**
    Hoisting ou "Elevação", é utilizado no javascript(a partir do ECMAScript 2015), para elevar
  a declaração de funções, variaveis, entre outros.
    Tá, mas, o que seria a elevação da declaração de uma função ou variavel, quando declaramos uma
  variavel em javascript, essa declaração é armazenada na memoria, portanto, essa variavel pode ser
  acessada a qualquer lugar do codigo, obviamente ainda possui limitação de scopo, outra coisa a se
  atentar é, se um variavel não for inicializada, o seu valor será undefined, por que o hoisting não
  armazena a inicialização do variavel, apenas sua declaração.
*/

//Exemplo de hoisting simples com funções;

/*
O resultado do código acima é: "O nome do meu gato é Chloe"
*/

catName("Chloe");

function catName(name) {
  console.log("O nome do meu gato é " + name);
}

catName("Tigger");

/*
O resultado do código acima é: "O nome do meu gato é Tigger"
*/

//Exemplo de hoisting de declaração sem a inicialização;
console.log(num); // Retorna undefined
var num;
num = 6;

//Exemplo de inicialização antes da declaração
num = 6;
console.log(num); // retorna 6
var num;

//Todos os exemplos foram tirados da pagina Hoisting - Glossario do mdn web docs.
//https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting
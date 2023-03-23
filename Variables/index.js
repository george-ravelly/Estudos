/**
        Tipos de variaveis em javascript
    Os tipos primitivos do javascript são:
      1. number - tipo primitivo para representação de numeros;
      2. string - tipo primitivo para representação de caracteris;
      3. boolean - tipo primitivo para representar estado logico de verdadeiro ou falso;
      4. undefined - tipo primitvo que representa uma variavel que não possui qualquer valor atribuido;
      5. null - tipo primitivo para representar a ausencia de um objeto;
      6. bigint - O bigint é um tipo mais avançado do javascript, ele é utilizado para representar numeros 
        gigantes, os quais, o number padrão não da suporte;
      7. symbol - O tipo symbol é um construtor disponivel no javascript que garante que seu valor será unico, 
        é utilizado para garantir ao adicionar uma chave a um objeto que ela será unica.
*/



/**
  Bom varaivei no javascript podem ser declaradas de três formas:
  1. var - Declara um variavel com escopo de função ou com escopo global, 
    ou seja, essa variavel pode ser acessa fora da função que ela foi declarada;
  2. let - O let diferente do var, declara uma variavel de escopo de bloco ou escopo local, ou seja,
    é uma variavel que restringe o acesso ao bloco de codigo que foi criada;
  3. const - O const, similar ao let, é uma variavel de escopo de bloco ou local, portanto, só pode ser acessada
    dentro do bloco ao qual ela foi declarada, no entanto, ela possui uma particularidade, ela não pode ser
    reatribuida, pois, e uma constante, porém, se ela for declarada como objeto ou array, os valores internos
    do array/objeto podem ser modificados.
*/

//Exemplo de uso incorrento do var;

let car = 'Audi';
var truck = 'Volvo';

//com o bloco criado pelo let
let WhatsTheValue = () => {
  let car = 'VW';
  var truck = 'Scania';
  console.log('The "let car" inside is:', car);  
  console.log('The "var truck" inside is:', truck);   
}

WhatsTheValue();

console.log('The "let car" outside is:', car);
console.log('The "var truck" outside is:', truck);

//sem o bloco novo criado pelo let
{
  let car = 'VW';
  var truck = 'Scania';
  console.log('The "let car" inside is:', car);  
  console.log('The "var truck" inside is:', truck);   
}

console.log('The "let car" outside is:', car);
console.log('The "var truck" outside is:', truck); 
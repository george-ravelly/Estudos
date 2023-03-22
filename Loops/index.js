/**
    O javascript possui algumas formas de realizar loops, primeiro temos as formas basicas, formas padrão em diversas linguagens,
  são elas: o For, While e doWhile.
    O javascript também da algumas variações do For:
      1. forEach - percorre cada elemento do array;
      2. Map - percorre cada elemento do array, faz uma alteração no elemento do array, por fim, retorna um novo array;
      3. Filter - percorre o array, faz uma analise do elemento baseado em uma condição definida, por fim, retorna um array com os elementos que 
        correspondem a condição estabelecida;
      4. Reduce - ;
      5. Find - percorre o array procurando o primeiro elemento que corresponda a condição estabelecida, em seguida retornando o mesmo;
      6. FindIndex - recebe o elemento e retorna a posição desse elemento no array;
      7. ForIn - percorre cada chave/index interna de um objeto/array;
      8. ForOf - percorre cada valor de um objeto/array;
*/

const array = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element, 'for padrão');
}

let i = 0;
while (i < array.length) {
  console.log(array[i++], 'while');
}

i = 0;
do {
  console.log(array[i++], 'do while');
} while (i < array.length);

array.forEach(element => {
  console.log(element, 'foreach');
});

console.log(array.map(element => element + 1), 'map');

console.log(array.filter(element => {return element % 2 === 0}), 'filter');

console.log(array.reduce((prevElement, element) => element + prevElement), 'reduce');

console.log(array.find(element => element === 5), 'find');

console.log(array.findIndex(index => index === 5), 'findIndex');

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const element = array[key];
    console.log(element, key, 'forin');
  }
}

for (const iterator of array) {
  console.log(iterator, 'forof');
}


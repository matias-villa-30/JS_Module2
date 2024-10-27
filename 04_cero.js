let numeros = [];
let i = 0;
let number = parseInt(prompt("Give a number, 0 ends"));
while (number != 0){
  numeros[i] = number;
  i++;
  number = parseInt(prompt("Give a number, 0 ends"));
}

console.log(numeros.sort((a,b) => b-a));
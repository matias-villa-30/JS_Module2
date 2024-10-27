let numeros = [];
let i = 0;
let number = parseInt(prompt("Give a number, repetition ends"));
while (true){
  numeros[i] = number;
  i++;
  number = parseInt(prompt("Give a number, repetition ends"));
  if (numeros.includes(number)) {
    console.log("Number has been given already");
    break;
  }
}
console.log(numeros.sort((a,b) => a-b));
let candidatos_numero = parseInt(prompt("Number of candidates"));
let total = [];
let j = 1;

for (i=0;i<candidatos_numero;i++){
  let votos = {
    name: prompt("Name of candidate " + j),
    votes: parseInt(prompt("Votes"))

  }
  total.push(votos);
  j++;
}

let winner = total[0];

for (let i = 1; i < total.length; i++) {
  if (total[i].votes > winner.votes) {
    winner = total[i];
  }
}


console.log("the winner is " + winner.name + " with " + winner.votes + " votes.");


console.log("results:");
for (let i = 0; i < total.length; i++) {
  console.log(total[i].name + ": " + total[i].votes + " votes");
}


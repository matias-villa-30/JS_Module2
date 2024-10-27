let participantes_lista = [];
let participantes_total = parseInt(prompt("Number of participants"));
const container = document.querySelector("ol");

for (let i = 0; i < participantes_total; i++) {
  participantes_lista[i] = prompt("Name of participant");
}

let players = participantes_lista.sort();

for (let i = 0; i < players.length; i++) {
  let displayListItems = document.createElement('li');
  displayListItems.innerHTML = players[i];
  container.append(displayListItems);
}

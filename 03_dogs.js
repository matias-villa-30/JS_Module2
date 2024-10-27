let dogs = [];
for (i=0;i<6;i++){
  dogs[i] = prompt("Write the dogs name");
}
let dogs_ordered = dogs.sort().reverse()

let displayListItems;
const container = document.querySelector("ul");

for (i=0;i<dogs_ordered.length; i++){
  let displayListItems = document.createElement("li");
  displayListItems.innerHTML = dogs_ordered[i];
  container.append(displayListItems);
}
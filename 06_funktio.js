
function dice() {
  let num = Math.floor(Math.random()*6+1);

  return num;
}

const container = document.querySelector("ul");

let roll;
while ((roll = dice())!==6){
  let displayListItems = document.createElement("li");
  displayListItems.innerHTML = roll;
  container.append(displayListItems);

}
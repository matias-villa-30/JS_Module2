function dice(sides) {
  let num = Math.floor(Math.random()*sides+1);

  return num;
}

const container = document.querySelector("ul");

let roll;
let sides = 21;
while ((roll = dice(sides))!==sides){
  let displayListItems = document.createElement("li");
  displayListItems.innerHTML = roll;
  container.append(displayListItems);

}
function concat(nimi) {
  let result = "";
  for (let i = 0; i < nimi.length; i++) {
    result += nimi[i];
  }
  return result;
}

const coso = ["Array", "Join()", "Not", "allowed"];

document.querySelector('#concat').innerHTML = concat(coso);
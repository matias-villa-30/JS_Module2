function even(numerot) {
 let par = [];
  let j = 0;
  for (let i = 0; i < numerot.length; i++) {
  if (numerot[i] % 2 == 0) {
    par[j] = numerot[i];
    j++;
  }

  }
  return par;
}

let coso = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.querySelector('#par').innerHTML = even(coso);
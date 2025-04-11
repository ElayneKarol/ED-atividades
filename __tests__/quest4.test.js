import Stack from "../src/pilha2.js";
//QUESTÃO 4. Implemente um conversor de números decimais para binários utilizando uma pilha.

function dec2Bin(decNumber) {
  var restStack = [];
  let rest;
  let binaryString = "";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }
  return binaryString;
}

console.log(dec2Bin(25));

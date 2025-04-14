import PilhaComFilas from "../../src/pilhaComFilas.js";

let pilha = new PilhaComFilas();

pilha.push("A");
pilha.push("B");
pilha.push("C");

console.log(pilha.pop()); // C
console.log(pilha.pop()); // B
pilha.push("D");
console.log(pilha.pop()); // D
console.log(pilha.pop()); // A

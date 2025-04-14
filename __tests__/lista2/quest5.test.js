import {
  criarDeque,
  inserirInicio,
  removerInicio,
  inserirFim,
  removerFim,
} from "../../src/deque.js"; // lembrando de adicionar a extensão .js

let meuDeque = criarDeque();

inserirInicio(meuDeque, "A");
inserirFim(meuDeque, "B");
inserirInicio(meuDeque, "C");
inserirFim(meuDeque, "D");

console.log("Deque atual:", meuDeque);

let removido1 = removerInicio(meuDeque);
let removido2 = removerFim(meuDeque);

console.log("Removidos:", removido1, removido2);
console.log("Deque final:", meuDeque);

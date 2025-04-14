import Stack from "../src/pilha2.js";
//QUESTÃO 2. Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
//dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
//Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
//tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
//Javascript.
//i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
//  topoA e topoB).
//ii. As funções ÉVaziaA e ÉVaziaB.
//    iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
//    emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.

const TAMANHO = 6; // tamanho total do vetor
let vetor = new Array(TAMANHO);

let topoA = -1; // Pilha A começa no topo -1 (vazia)
let topoB = TAMANHO; // Pilha B começa no final + 1 (vazia)

function eVaziaA() {
  return topoA === -1;
}

function eVaziaB() {
  return topoB === TAMANHO;
}

function empilhaA(valor) {
  if (topoA + 1 === topoB) {
    console.log("Pilha cheia!");
    return;
  }
  topoA++;
  vetor[topoA] = valor;
}

function empilhaB(valor) {
  if (topoB - 1 === topoA) {
    console.log("Pilha cheia!");
    return;
  }
  topoB--;
  vetor[topoB] = valor;
}

function desempilhaA() {
  if (eVaziaA()) {
    console.log("Pilha A está vazia!");
    return null;
  }
  let valor = vetor[topoA];
  topoA--;
  return valor;
}

function desempilhaB() {
  if (eVaziaB()) {
    console.log("Pilha B está vazia!");
    return null;
  }
  let valor = vetor[topoB];
  topoB++;
  return valor;
}

empilhaA(1);
empilhaA(2);
empilhaB(3);
empilhaB(4);

console.log(vetor);

console.log(desempilhaA());
console.log(desempilhaB());

console.log(vetor);

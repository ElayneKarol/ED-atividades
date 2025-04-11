import Stack from "../src/pilha2.js";
//QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha
//com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar.

// Função para trocar o topo com a base
function trocaTopoBase(pilhaOriginal) {
  if (pilhaOriginal.size() <= 1) return; // nada a trocar

  let pilhaAux = new Stack();

  let topo = pilhaOriginal.pop(); // pega o topo

  // Transfere todos os elementos, exceto o último (base)
  while (pilhaOriginal.size() > 1) {
    pilhaAux.push(pilhaOriginal.pop());
  }

  let base = pilhaOriginal.pop(); // pega a base

  // Inverte a lógica: o topo vira base, e a base vira topo
  pilhaOriginal.push(topo); // o topo agora vai pra base

  // Reinsere os elementos do meio
  while (!pilhaAux.isEmpty()) {
    pilhaOriginal.push(pilhaAux.pop());
  }

  pilhaOriginal.push(base); // o base agora vai pro topo
}

// Exemplo de uso:
let pilha = new Stack();
pilha.push(2);
pilha.push(4);
pilha.push(6);

console.log("Antes da troca:");
pilha.print();

trocaTopoBase(pilha);

console.log("Depois da troca:");
pilha.print();

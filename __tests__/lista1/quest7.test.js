//QUESTÃO 7. Dada uma pilha contendo números inteiros, implemente uma função que remova
//todos os elementos duplicados, mantendo apenas a primeira ocorrência de cada número (mais
//próxima do topo). A solução deve preservar a ordem relativa dos elementos originais.
//Entrada:
//Uma lista de números representando a pilha (o último elemento da lista representa o topo).
//Saída:
//Uma lista representando a pilha resultante após a remoção de duplicatas.
//Exemplo:
//Entrada: [3, 7, 3, 2, 7, 1, 4, 2]
//Saída: [3, 7, 2, 1, 4]
function removeDuplicatas(pilha) {
  const vistos = new Set();
  const resultadoReverso = [];

  // Percorre de cima (último) pra baixo (primeiro)
  for (let i = pilha.length - 1; i >= 0; i--) {
    const valor = pilha[i];
    if (!vistos.has(valor)) {
      vistos.add(valor);
      resultadoReverso.push(valor);
    }
  }

  // Reverte de volta pra ordem correta (base → topo)
  return resultadoReverso.reverse();
}

// Exemplo de uso:
const entrada = [3, 7, 3, 2, 7, 1, 4, 2];
const resultado = removeDuplicatas(entrada);
console.log(resultado); // [3, 7, 2, 1, 4]

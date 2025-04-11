//QUESTÃO 5. É possível analisar se uma sequência parêntesis e colchetes está bem-formada,
//ou seja, parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos
//utilizando uma pilha. Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto ( ( )
//] está malformada. Implemente um programa que recebe um texto e analisa se ele está bem
//formado em termos de ordem de parêntesis e colchetes]

function estaBemFormado(sequencia) {
  let pilha = [];

  for (let char of sequencia) {
    if (char === "(" || char === "[") {
      pilha.push(char);
    } else if (char === ")") {
      if (pilha.pop() !== "(") {
        return false;
      }
    } else if (char === "]") {
      if (pilha.pop() !== "[") {
        return false;
      }
    }
  }

  // Se a pilha estiver vazia, tudo foi fechado certinho
  return pilha.length === 0;
}

// Exemplos de uso:
console.log(estaBemFormado("[()[(())]]()")); // true
console.log(estaBemFormado("(()]")); // false
console.log(estaBemFormado("([)]")); // false
console.log(estaBemFormado("([])")); // true

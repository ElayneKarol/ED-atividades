//QUESTÃO 8. Imagine que você tem um conjunto de pratos empilhados. No entanto, por
//questões de organização, cada pilha só pode conter um número máximo capacidade de pratos.
//Se uma pilha atingir essa capacidade, uma nova pilha é criada.
//Implemente uma estrutura de dados PilhaDePratos que suporte as operações:
//empilha(int x): Adiciona um prato à última pilha disponível ou cria uma nova pilha, se necessário.
//desempilha(): Remove um prato da última pilha disponível e retorna seu valor. Se todas as pilhas
//estiverem vazias, retorne None.

class PilhaDePratos {
  constructor(capacidade) {
    this.capacidade = capacidade;
    this.pilhas = [[]];
  }

  empilha(valor) {
    let ultimaPilha = this.pilhas[this.pilhas.length - 1];

    if (ultimaPilha.length >= this.capacidade) {
      this.pilhas.push([]);
      ultimaPilha = this.pilhas[this.pilhas.length - 1];
    }

    ultimaPilha.push(valor);
  }

  desempilha() {
    while (
      this.pilhas.length > 0 &&
      this.pilhas[this.pilhas.length - 1].length === 0
    ) {
      this.pilhas.pop();
    }

    if (this.pilhas.length === 0) {
      return null;
    }

    let ultimaPilha = this.pilhas[this.pilhas.length - 1];
    let valor = ultimaPilha.pop();

    if (ultimaPilha.length === 0) {
      this.pilhas.pop();
    }

    return valor;
  }
}

const pratos = new PilhaDePratos(3);

pratos.empilha(5);
pratos.empilha(10);
pratos.empilha(15);
pratos.empilha(20);

console.log(pratos.desempilha());
console.log(pratos.desempilha());

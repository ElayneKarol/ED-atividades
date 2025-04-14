class FilaComPilhas {
  constructor() {
    this.pilha1 = []; 
    this.pilha2 = [];
  }

  enqueue(valor) {
    this.pilha1.push(valor);
  }

   dequeue() {
       if (this.pilha2.length === 0) {
      while (this.pilha1.length > 0) {
        this.pilha2.push(this.pilha1.pop());
      }
    }

    if (this.pilha2.length === 0) {
      return "Fila está vazia!";
    }

    return this.pilha2.pop();
  }

  isEmpty() {
    return this.pilha1.length === 0 && this.pilha2.length === 0;
  }

  peek() {
    if (this.pilha2.length === 0) {
      while (this.pilha1.length > 0) {
        this.pilha2.push(this.pilha1.pop());
      }
    }
    return this.pilha2[this.pilha2.length - 1];
  }
}
export default FilaComPilhas;
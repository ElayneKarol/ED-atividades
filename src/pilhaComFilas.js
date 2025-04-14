import Fila from "./fila.js";
class PilhaComFilas {
  constructor() {
    this.fila1 = new Fila();
    this.fila2 = new Fila();
  }

  push(valor) {
    this.fila1.enqueue(valor);
  }

  pop() {
    while (this.fila1.size() > 1) {
      this.fila2.enqueue(this.fila1.dequeue());
    }

    let topo = this.fila1.dequeue();

    let temp = this.fila1;
    this.fila1 = this.fila2;
    this.fila2 = temp;

    return topo;
  }

  isEmpty() {
    return this.fila1.isEmpty();
  }
}
export default PilhaComFilas;

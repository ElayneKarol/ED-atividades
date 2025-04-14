import FilaComPilhas from "../../src/filaComPilha.js";
let fila = new FilaComPilhas();

fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");

console.log(fila.dequeue());
console.log(fila.dequeue());
fila.enqueue("D");
console.log(fila.dequeue());
console.log(fila.dequeue());

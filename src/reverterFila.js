function reverterFila(fila) {
    if (fila.length === 0) {
      return;
    }
  
    const elemento = fila.shift();
  
    reverterFila(fila);
  
    fila.push(elemento);
  }

  export default reverterFila;
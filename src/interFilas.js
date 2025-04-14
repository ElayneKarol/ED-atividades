function intercalarFilas(fila1, fila2) {
    let resultado = [];
  
    let i = 0;
    let tamanho1 = fila1.length;
    let tamanho2 = fila2.length;
  
    while (i < tamanho1 || i < tamanho2) {
      if (i < tamanho1) {
        resultado.push(fila1[i]);
      }
      if (i < tamanho2) {
        resultado.push(fila2[i]);
      }
      i++;
    }
  
    return resultado;
  }
  
  export default intercalarFilas;
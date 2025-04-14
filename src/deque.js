function criarDeque() {
    return [];
  }
  
  function inserirInicio(deque, elemento) {
    deque.unshift(elemento);
  }
  
  function removerInicio(deque) {
    return deque.shift();
  }
  
  function inserirFim(deque, elemento) {
    deque.push(elemento);
  }
  
  function removerFim(deque) {
    return deque.pop();
  }
  
  if (typeof module !== 'undefined') {
    module.exports = {
      criarDeque,
      inserirInicio,
      removerInicio,
      inserirFim,
      removerFim
    };
  }
  
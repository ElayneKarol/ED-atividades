class Fila {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item); 
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      return this.items[0];
    }
  }
  
  export default Fila;
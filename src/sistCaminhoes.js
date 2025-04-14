class SistemaCaminhoes {
    constructor() {
      this.fila = [];
      this.carregamentosHoje = 0;
      this.limiteDiario = 10;
    }
  
        chegada(nome) {
      if (this.fila.length + this.carregamentosHoje >= this.limiteDiario) {
        console.log("Limite de carregamentos atingido para hoje. Aguarde até amanhã.");
        return;
      }
      this.fila.push(nome);
      console.log(`${nome} entrou na fila.`);
    }
  
      atender() {
      if (this.fila.length === 0) {
        console.log("Nenhum caminhoneiro aguardando.");
        return;
      }
      const atendido = this.fila.shift();
      this.carregamentosHoje++;
      console.log(`Caminhoneiro atendido: ${atendido}`);
    }
  
       haCaminhoneiros() {
      return this.fila.length > 0;
    }
  
        limiteAtingido() {
      return this.carregamentosHoje >= this.limiteDiario;
    }
  
        listarFila() {
      if (this.fila.length === 0) {
        console.log("Nenhum caminhoneiro aguardando.");
      } else {
        console.log("Caminhoneiros na fila:");
        this.fila.forEach((nome, i) => {
          console.log(`${i + 1}. ${nome}`);
        });
      }
    }
  }
  export default SistemaCaminhoes;
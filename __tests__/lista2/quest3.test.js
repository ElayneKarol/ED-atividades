import SistemaCaminhoes from "../../src/sistCaminhoes.js";

let sistema = new SistemaCaminhoes();

sistema.chegada("João");
sistema.chegada("Maria");
sistema.chegada("Carlos");

sistema.listarFila();
sistema.atender();
sistema.atender();
sistema.chegada("Luana");

sistema.listarFila();

console.log("Ainda há caminhoneiros?", sistema.haCaminhoneiros());
console.log("Limite atingido?", sistema.limiteAtingido());

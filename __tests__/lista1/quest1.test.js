import Stack from "../src/pilha2.js";
//QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
//em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
//deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
//inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
//forma invertida.

function inverterComPilha(str) {
  let pilha = [];

  // empilha cada caractere
  for (let char of str) {
    pilha.push(char);
  }

  // desempilha e forma a string invertida
  let invertida = "";
  while (pilha.length > 0) {
    invertida += pilha.pop();
  }

  return invertida;
}

console.log(inverterComPilha("abacaxi"));

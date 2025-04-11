//QUESTÃO 6. A Notação Polonesa Reversa (RPN, do inglês Reverse Polish Notation) é uma
//notação matemática onde cada operador segue todos os seus operandos. Por exemplo, para
//somar três e quatro, alguém escreveria "3 4 +" em vez de "3 + 4". Se houver múltiplas operações,
//o operador é dado imediatamente após seu segundo operando; então a expressão "3 - 4 + 5"
//seria escrita como "3 4 - 5 +", primeiro subtraindo 4 de 3 e depois adicionando 5 a isso.
//Desenvolva um método que transforme a expressão algébrica com parênteses em uma forma
//RPN. Você pode supor que para os casos de teste abaixo apenas letras simples serão usadas e
//colchetes [] não serão utilizados. A ordem de precedência de operadores é muito importante e
//não deve ser ignorada.

function infixParaRPN(expressao) {
  const precedencia = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  const pilha = [];
  let saida = "";

  for (let char of expressao) {
    if (/[a-z]/i.test(char)) {
      // Se for letra, vai direto pra saída
      saida += char;
    } else if (char === "(") {
      pilha.push(char);
    } else if (char === ")") {
      while (pilha.length && pilha[pilha.length - 1] !== "(") {
        saida += pilha.pop();
      }
      pilha.pop(); // Remove o '('
    } else if ("+-*/^".includes(char)) {
      while (
        pilha.length &&
        precedencia[char] <= precedencia[pilha[pilha.length - 1]]
      ) {
        if (char === "^" && pilha[pilha.length - 1] === "^") break; // ^ é associativo à direita
        saida += pilha.pop();
      }
      pilha.push(char);
    }
  }

  // Esvazia o restante da pilha
  while (pilha.length) {
    saida += pilha.pop();
  }

  return saida;
}

// Testes
const testes = [
  "(a+(b*c))",
  "((a+b)*(z+x))",
  "((a+t)*((b+(a+c))^(c+d)))",
  "a+b*c+d",
  "a*b+c/d",
  "a*b-(c-d)+e",
];

testes.forEach((exp) => {
  console.log(`Infixa: ${exp} -> RPN: ${infixParaRPN(exp)}`);
});

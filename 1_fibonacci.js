function pertenceFibonacci(numero) {
    // Caso base: 0 e 1 pertencem à sequência de Fibonacci
    if (numero === 0 || numero === 1) {
      return true;
    }
  
    // Calcula a sequência de Fibonacci até atingir ou superar o número informado
    let a = 0;
    let b = 1;
    while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    // Verifica se o número informado é igual ao último valor calculado da sequência
    return b === numero;
  }
  
  // Solicita o número ao usuário
  let numeroInformado = parseInt(prompt("Digite um número:"));
  
  // Verifica se o número pertence à sequência de Fibonacci
  if (pertenceFibonacci(numeroInformado)) {
    alert(numeroInformado + " pertence à sequência de Fibonacci.");
  } else {
    alert(numeroInformado + " não pertence à sequência de Fibonacci.");
  }
function contaAs(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i].toLowerCase() === 'a') { // Verifica se o caractere é "a" após converter para minúsculo
        contador++;
      }
    }
    return contador;
  }
  
  let textoInformado = prompt("Digite um texto:");
  let quantidadeAs = contaAs(textoInformado);
  
  if (quantidadeAs > 0) {
    alert(`O texto "${textoInformado}" contém a letra "a" ${quantidadeAs} vezes.`);
  } else {
    alert(`O texto "${textoInformado}" não contém a letra "a".`);
  }
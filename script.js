function fibonacci(valor) {
  let sequencia = [0, 1];
  let encontrou = false;

  while (!encontrou) {
    let novoValorDaSequencia = sequencia
      .slice(-2)
      .reduce((acumulador, valor) => acumulador + valor);
    sequencia.push(novoValorDaSequencia);
    console.log(sequencia);

    if (novoValorDaSequencia == valor) {
      encontrou = true;
      console.log(`O valor ${valor} pertence à sequência de Fibonacci`);
    } else if (novoValorDaSequencia > valor) {
      encontrou = true;
      console.log(`O valor ${valor} NÃO pertence à sequência de Fibonacci`);
    }
  }
}

function verificarLetraOcorrencia(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      contador++;
    }
  }

  if (contador > 0) {
    console.log(`A letra 'a' aparece ${contador} vezes na string.`);
  } else {
    console.log(`A letra 'a' não aparece na string.`);
  }
}

function soma() {
  indice = 12;
  soma = 0;
  for (let k = 1; k < indice; k += 1) {
    soma += k;
  }
  console.log(soma);
}

// questao 1
fibonacci(21);
//questao 2
verificarLetraOcorrencia('A raposa rápida pula sobre o cão preguiçoso.');
//questao 3
soma();

//questao 4
/*4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
*/
//a) só numeros impares, proximo elemnto: 9
//b) cada numero é o dobro do anterior:
//c) só quadrados perfeitos, proximo: 49
//d) quadrados dos numeros pares, proximo: 100
//e) sequencia de fibonacci, proximo elemento: 13
//f)  numeros que a pronuncia começa com 'de', proximo: 200

/*
Questão 5

Ligo o primeiro interruptor (Interruptor A) e deixo ligado por alguns minutos.
Isso aquece a lâmpada correspondente.
Desligo o Interruptor A e ligo o segundo interruptor (Interruptor B).
Isso deixa a lâmpada correspondente ao Interruptor A quente, mas apagada, e a lâmpada correspondente ao Interruptor B acesa.

A lampada que estiver acesa é do interruptor B, a que estiver apagada e fria é do interruptor C e a que estiver apagada e quente é do interruptor A
*/

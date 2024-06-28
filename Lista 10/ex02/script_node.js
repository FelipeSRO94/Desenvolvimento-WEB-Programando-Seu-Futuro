const { somar, subtrair, multiplicar, dividir } = require('./operacoes_node');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o primeiro número: ', (n1) => {
  readline.question('Digite o segundo número: ', (n2) => {
    const num1 = Number(n1);
    const num2 = Number(n2);

    console.log(`Resultado da soma: ${somar(num1, num2)}`);
    console.log(`Resultado da subtração: ${subtrair(num1, num2)}`);
    console.log(`Resultado da multiplicação: ${multiplicar(num1, num2)}`);
    console.log(`Resultado da divisão: ${dividir(num1, num2)}`);

    readline.close();
  });
});

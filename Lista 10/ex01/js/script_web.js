import { somar, subtrair, multiplicar, dividir } from './operacoes_web.js';

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('n1');
    const num2 = document.getElementById('n2');
    const resultado = document.getElementById('resultado');

    document.getElementById('somar').addEventListener('click', () => {
        resultado.textContent = `Resultado: ${somar(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('subtrair').addEventListener('click', () => {
        resultado.textContent = `Resultado: ${subtrair(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('multiplicar').addEventListener('click', () => {
        resultado.textContent = `Resultado: ${multiplicar(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('dividir').addEventListener('click', () => {
        resultado.textContent = `Resultado: ${dividir(Number(num1.value), Number(num2.value))}`;
    });
});

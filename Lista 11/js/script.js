document.getElementById('calcularBtn').addEventListener('click', function() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        document.getElementById('resultadoIR').innerText = 'Por favor, insira um valor válido para o salário bruto.';
        document.getElementById('resultadoLiquido').innerText = '';
        return;
    }
    
    const valorIR = salarioBruto * 15 / 100;
    const salarioLiquido = salarioBruto - valorIR;
    
    document.getElementById('resultadoIR').innerText = `O valor do imposto de renda é: R$ ${valorIR.toFixed(2)}`;
    document.getElementById('resultadoLiquido').innerText = `O salário líquido é: R$ ${salarioLiquido.toFixed(2)}`;
});

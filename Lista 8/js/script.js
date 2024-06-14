let numeroAtual = '';
let numeroAnterior = '';
let operacao = '';

function adicionarNumero(numero) {
    numeroAtual += numero;
    atualizarDisplay();
}

function definirOperacao(op) {
    if (numeroAtual === '') return;
    if (numeroAnterior !== '') {
        calcular();
    }
    operacao = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
}

function calcular() {
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }

    numeroAtual = resultado;
    operacao = '';
    numeroAnterior = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    const display = document.getElementById('display');
    display.value = numeroAtual;
}

function limparDisplay() {
    numeroAtual = '';
    numeroAnterior = '';
    operacao = '';
    atualizarDisplay();
}

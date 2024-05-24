document.addEventListener("DOMContentLoaded", () => {
    const nome = prompt("Por favor, digite seu nome:");
    alert(`Olá, ${nome}!\n Tudo bem ?`);

    const idade = prompt("Por favor, digite sua idade:");
    const emprego = prompt("Por favor, digite seu emprego atual:");
    const endereco = prompt("Por favor, digite seu endereço:");

    alert(`Nome: ${nome}\nIdade: ${idade}\nEmprego atual: ${emprego}\nEndereço: ${endereco}`);
});

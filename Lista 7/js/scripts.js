// scripts.js

const produtos = [
    {
        nome: "Deck Box",
        descricao: "Comporta até 80 cartas com protetores.\nFeita com material plástico.\nAcompanha um divisor de deck.",
        imagem: "link-para-imagem-produto1.jpg",
        valor: "R$ 35,00"
    },
    {
        nome: "Box LEDE Legado da Destruição",
        descricao: "Caixa de Booster contendo 24 booster de 9 cartas cada.",
        imagem: "link-para-imagem-produto2.jpg",
        valor: "R$ 609,00"
    },
    {
        nome: "SHIELD DRAGON SHIELD - MATTE - MINI - RUBI (60 UNIDADES)",
        descricao: "Protetor plástico para cards colecionáveis. Embalagem com 60 unidades. Autorizado para ser usado em eventos oficiais, não descola o fundo nem desgasta facilmente a imagem.",
        imagem: "link-para-imagem-produto3.jpg",
        valor: "R$ 85,00"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const conteudoPrincipal = document.getElementById('conteudo-principal');

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('conteudo-produto');

        const nome = document.createElement('h2');
        nome.textContent = produto.nome;

        const descricao = document.createElement('p');
        descricao.textContent = produto.descricao;

        const imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        const valor = document.createElement('p');
        valor.textContent = produto.valor;

        const botaoComprar = document.createElement('button');
        botaoComprar.textContent = 'Comprar';

        const botaoDetalhes = document.createElement('button');
        botaoDetalhes.textContent = 'Detalhes';

        produtoDiv.append(nome, imagem, descricao, valor, botaoComprar, botaoDetalhes);
        conteudoPrincipal.appendChild(produtoDiv);
    });
});

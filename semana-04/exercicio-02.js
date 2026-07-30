//Exercício para Fixar - Loja Virtual

const precosComDesconto = precos.map((preco) => preco * 0.8);

const produtosPopulares = precos.filter((preco) => preco >= 30 && preco <= 150);

const produtoPremium = precos.find((preco) => preco > 300);

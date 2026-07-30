/**
 * SISTEMA DE ESTOQUE - LOJA "TECH STORE" (GABARITO)
 * ---------------------------------------------------
 * Refatoração aplicada: os objetos soltos (produto1 a produto5) deram
 * lugar a instâncias da classe `Produto`, criadas com `new Produto(...)`.
 *
 * As funções que consomem os produtos (calcularValorTotalEstoque,
 * listarProdutosPorCategoria, encontrarProdutoComMenorEstoque,
 * gerarRelatorioEstoque) não precisaram de nenhuma alteração, pois uma
 * instância de classe acessa seus atributos da mesma forma que um
 * objeto comum (produto.nome, produto.preco, ...).
 */

class Produto {
  constructor(nome, preco, quantidadeEstoque, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
    this.categoria = categoria;
  }
}

// ---------------------------------------------------------
// Produtos criados a partir da classe, usando `new`
// ---------------------------------------------------------

const produto1 = new Produto("Mouse Gamer RGB", 89.9, 42, "Periféricos");
const produto2 = new Produto("Teclado Mecânico", 249.9, 18, "Periféricos");
const produto3 = new Produto('Monitor 24"', 799.0, 7, "Monitores");
const produto4 = new Produto("Cadeira Gamer", 1199.9, 3, "Móveis");
const produto5 = new Produto("Headset Bluetooth", 159.5, 25, "Periféricos");

const produtosEstoque = [produto1, produto2, produto3, produto4, produto5];

// ---------------------------------------------------------
// Funções que consomem os produtos (idênticas ao arquivo original)
// ---------------------------------------------------------

// Soma preco * quantidadeEstoque de todos os produtos
function calcularValorTotalEstoque(produtos) {
  let total = 0;

  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco * produtos[i].quantidadeEstoque;
  }

  return total;
}

// Retorna apenas os produtos de uma determinada categoria
function listarProdutosPorCategoria(produtos, categoria) {
  return produtos.filter((produto) => produto.categoria === categoria);
}

// Encontra o produto com menor quantidade em estoque (alerta de reposição)
function encontrarProdutoComMenorEstoque(produtos) {
  let menorProduto = produtos[0];

  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].quantidadeEstoque < menorProduto.quantidadeEstoque) {
      menorProduto = produtos[i];
    }
  }

  return menorProduto;
}

// Monta um relatório em texto com os dados de cada produto
function gerarRelatorioEstoque(produtos) {
  let relatorio = "=== RELATÓRIO DE ESTOQUE ===\n";

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    relatorio += `- ${produto.nome} (${produto.categoria}): ${produto.quantidadeEstoque} un. x R$ ${produto.preco.toFixed(2)}\n`;
  }

  const valorTotal = calcularValorTotalEstoque(produtos);
  const produtoCritico = encontrarProdutoComMenorEstoque(produtos);

  relatorio += `\nValor total em estoque: R$ ${valorTotal.toFixed(2)}`;
  relatorio += `\nAtenção, repor com urgência: ${produtoCritico.nome} (restam ${produtoCritico.quantidadeEstoque})`;

  return relatorio;
}

console.log(gerarRelatorioEstoque(produtosEstoque));

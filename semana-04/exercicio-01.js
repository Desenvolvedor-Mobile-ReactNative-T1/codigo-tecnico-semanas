//**Exercício Prático – Loja de Informática**

const produtos = ["Mouse", "Teclado", "Monitor", "Notebook", "Headset"];

const precos = [80, 150, 950, 4200, 320];

// 1. map() - Converter todos os produtos para letras maiúsculas
const produtosMaiusculos = produtos.map((produto) => {
  return produto.toUpperCase();
});

console.log("Produtos em maiúsculo:");
console.log(produtosMaiusculos);

// ---------------------------------------------

// 2. filter() - Filtrar apenas os preços maiores que R$ 300
const precosAcima300 = precos.filter((preco) => {
  return preco > 300;
});

console.log("Preços acima de R$ 300:");
console.log(precosAcima300);

// ---------------------------------------------

// 3. find() - Encontrar o produto "Notebook"
const produtoEncontrado = produtos.find((produto) => {
  return produto === "Notebook";
});

console.log("Produto encontrado:");
console.log(produtoEncontrado);

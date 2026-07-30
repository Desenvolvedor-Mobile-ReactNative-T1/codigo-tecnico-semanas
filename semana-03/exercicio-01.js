// Exercício 05 Prático (20 minutos) - Bug em produção do E-Commerce:
const prompt = require("prompt-sync")();

function calcularCarrinho(
  precoItem1,
  precoItem2,
  cupomDesconto,
  quantidadeItens,
) {
  // Bug 1 (corrigido): prompt-sync sempre retorna string. Convertendo
  // explicitamente para número antes de qualquer conta.
  const preco1 = parseFloat(precoItem1) || 0;
  const preco2 = parseFloat(precoItem2) || 0;
  const quantidade = parseInt(quantidadeItens, 10) || 0;

  var total = preco1 + preco2;

  // Bug 2 (corrigido): "===" em vez de "=" (comparação, não atribuição),
  // e subtração em vez de soma no desconto.
  if (cupomDesconto === "PROMO10") {
    total = total - total * 0.1;
  }

  // Bug 3 (corrigido): "===" em vez de "=" na comparação de quantidade.
  var freteGratis;
  if (quantidade === 0) {
    freteGratis = true;
  } else {
    freteGratis = false;
  }

  // Comparação numérica (100, não "100"), agora que "total" é number.
  if (total >= 100) {
    console.log("Parabéns, frete grátis!");
    freteGratis = true;
  }

  return "Total: R$ " + total.toFixed(2) + " | Frete grátis: " + freteGratis;
}

const precoItem1Input = prompt("Preço do item 1: ");
const precoItem2Input = prompt("Preço do item 2: ");
const cupomInput = prompt("Cupom de desconto (ou deixe vazio): ");
const quantidadeDeItensInput = prompt("Quantidade de itens: ");

console.log(
  calcularCarrinho(
    precoItem1Input,
    precoItem2Input,
    cupomInput,
    quantidadeDeItensInput,
  ),
);

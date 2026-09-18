const PRECO_COMBO = 22;

const pedidos = [
  { filme: "Duna", tipo: "inteira", quantidade: 2, preco: 32, combos: 1 },
  { filme: "Duna", tipo: "meia", quantidade: 2, preco: 32, combos: 0 },
  { filme: "Interestelar", tipo: "inteira", quantidade: 3, preco: 28, combos: 2 },
];

const cupom = "CINE10";

function precoDoIngresso(pedido) {
  if (pedido.tipo === "meia") {
    return pedido.preco / 2;
  }

  return pedido.preco;
}

function calcularItem(pedido) {
  const ingressos = pedido.quantidade * precoDoIngresso(pedido);
  const combos = pedido.combos * PRECO_COMBO;

  return ingressos + combos;
}

function aplicarCupom(valor, cupom) {
  if (cupom === "CINE10") {
    return valor - valor * 0.1;
  }

  return valor;
}

function fecharCaixa(pedidos, cupom) {
  let total = 0;

  for (const pedido of pedidos) {
    total += calcularItem(pedido);
  }

  return aplicarCupom(total, cupom);
}

function imprimirRelatorio(pedidos, cupom, total) {
  console.log("=== Fechamento de caixa — CineMatch ===");

  for (const pedido of pedidos) {
    console.log(
      `- ${pedido.filme} (${pedido.tipo}) x${pedido.quantidade}, ${pedido.combos} combo(s)`,
    );
  }

  console.log("Cupom:", cupom);
  console.log("Total: R$", total.toFixed(2));
}

const total = fecharCaixa(pedidos, cupom);
imprimirRelatorio(pedidos, cupom, total);

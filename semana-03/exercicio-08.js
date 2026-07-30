// REGRA 1 — só soma, laço for, function tradicional
function somarCarrinho(itensCarrinho) {
  let total = 0;
  for (let i = 0; i < itensCarrinho.length; i++) {
    total += itensCarrinho[i];
  }
  return total;
}

// REGRA 2 — só decide a taxa, ternário, arrow function
const calcularDesconto = (valorCompra, clienteVIP) =>
  valorCompra >= 300 || clienteVIP ? 0.15 : 0;

// REGRA 2.1 — só aplica a taxa, arrow function
const calcularValorFinal = (valorCompra, desconto) =>
  valorCompra - valorCompra * desconto;

// REGRA 3 — só classifica, if/else if, function tradicional
function classificarFaixaEtaria(idade) {
  let faixaEtaria;
  if (idade < 18) faixaEtaria = "Menor de idade";
  else if (idade <= 59) faixaEtaria = "Adulto";
  else faixaEtaria = "Idoso";
  return faixaEtaria;
}

// REGRA 4 — só traduz, switch case, function tradicional
function traduzirStatusPagamento(statusPagamento) {
  let mensagemPagamento;
  switch (statusPagamento) {
    case 1:
      mensagemPagamento = "Pago";
      break;
    case 2:
      mensagemPagamento = "Pendente";
      break;
    case 3:
      mensagemPagamento = "Cancelado";
      break;
    default:
      mensagemPagamento = "Status inválido";
  }
  return mensagemPagamento;
}

// ORQUESTRADORA — só chama as regras na ordem e monta o texto
function montarResumoPedido(cliente) {
  const valorCompra = somarCarrinho(cliente.itensCarrinho);
  const desconto = calcularDesconto(valorCompra, cliente.clienteVIP);
  const valorFinal = calcularValorFinal(valorCompra, desconto);
  const faixaEtaria = classificarFaixaEtaria(cliente.idade);
  const mensagemPagamento = traduzirStatusPagamento(cliente.statusPagamento);

  return `Cliente: ${cliente.nome} | Faixa etária: ${faixaEtaria} | Valor com desconto: R$ ${valorFinal.toFixed(2)} | Status do pagamento: ${mensagemPagamento}`;
}

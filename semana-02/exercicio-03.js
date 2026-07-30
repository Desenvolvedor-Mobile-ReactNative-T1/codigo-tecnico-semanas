// Chamado MELHORIA-01 - Rastreamento de pedidos - Corrigido

let statusPedido = 3;

let mensagemStatus;

switch (statusPedido) {
  case 1:
    mensagemStatus = "Pedido recebido";
    break;

  case 2:
    mensagemStatus = "Em separação no estoque";
    break;

  case 3:
    mensagemStatus = "Enviado para transportadora";
    break;

  case 4:
    mensagemStatus = "Saiu para entrega";
    break;

  case 5:
    mensagemStatus = "Entregue";
    break;

  default:
    mensagemStatus = "Status desconhecido, entre em contato com o suporte";
}

console.log(`Status do pedido: ${mensagemStatus}`);

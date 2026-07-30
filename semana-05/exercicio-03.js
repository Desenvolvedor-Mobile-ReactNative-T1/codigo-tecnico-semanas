/**
 * GABARITO - CHAMADO #047
 * Sistema: iFoodGo - Módulo de Notificações
 */

const pedidos = [
  { id: 1, cliente: "Marina", status: "entregue" },
  { id: 2, cliente: "Rafael", status: "cancelado" },
  { id: 3, cliente: "Bianca", status: "em rota" },
];

function processarPedidos(pedidos, callback) {
  pedidos.forEach((pedido) => {
    let mensagem;

    if (pedido.status === "entregue") {
      mensagem = `Pedido #${pedido.id} entregue para ${pedido.cliente}!`;
    } else if (pedido.status === "cancelado") {
      mensagem = `Pedido #${pedido.id} foi cancelado.`;
    } else {
      mensagem = `Pedido #${pedido.id} está em andamento (${pedido.status}).`;
    }

    callback(mensagem);
  });
}

processarPedidos(pedidos, function (mensagem) {
  console.log(`📱 ${mensagem}`);
});

let totalPedidos = 0;
processarPedidos(pedidos, function (mensagem) {
  totalPedidos++;
});

console.log("Total de pedidos processados:", totalPedidos);

/**
 * PONTO-CHAVE PARA DISCUTIR EM AULA:
 * O forEach aqui é só o mecanismo de percorrer o array (os alunos já
 * conhecem). O que importa é a linha "callback(mensagem)" dentro dele:
 * é ali, explicitamente, que processarPedidos entrega o valor pra quem
 * chamou a função. Repare que dessa vez processarPedidos é chamada
 * diretamente (não é o forEach chamando a função do aluno como antes),
 * então o momento em que o callback recebe seu argumento fica visível.
 */

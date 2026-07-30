// Exercicio 04 - Chamado TERN-02 (15 minutos)
let valorCompra = 180;
let clienteVIP = true;

let frete = valorCompra >= 200 || clienteVIP ? 0 : 15.9;

let mensagem = `Valor do frete: R$ ${frete.toFixed(2)}`;
console.log(mensagem);

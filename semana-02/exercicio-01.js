//Exercício 1 - Chamado VAR-02 - Corrigido
let produto = "Teclado mecânico";
let estoqueDisponivel = 15;
let mensagemStatus = "";

if (estoqueDisponivel > 10) {
  var desconto = 0.1;
  mensagemStatus = "Estoque alto, aplicando desconto";
}

console.log("Produto: " + produto);
console.log("Desconto aplicado: " + desconto);
console.log("Status: " + mensagemStatus);

// Desafio - Sistema de Controle de um Estacionamento
// =========================================
// DESAFIO - Sistema de Controle de Estacionamento
// =========================================

// =========================================
// FUNCIONALIDADE 1
// Registrar as vagas disponíveis
// =========================================

console.log("=== VAGAS DISPONÍVEIS ===");

// Estrutura escolhida: FOR
// Já sabemos, de antemão, quantas vezes o loop deve rodar (de 1 até 20).
// Quando o número de repetições é conhecido antes de começar, o "for"
// é o mais adequado, pois já concentra início, condição e incremento
// numa única linha.
for (let vaga = 1; vaga <= 20; vaga++) {
  console.log(`Vaga ${vaga} disponível.`);
}

// =========================================
// FUNCIONALIDADE 2
// Entrada de veículos
// =========================================

console.log("\n=== ENTRADA DE VEÍCULOS ===");

let vagasDisponiveis = 5;

// Estrutura escolhida: WHILE
// Aqui não sabemos quantos veículos vão entrar - depende de uma condição
// (ainda existir vaga) que precisa ser verificada ANTES de cada repetição.
// Se não houvesse nenhuma vaga disponível desde o início, o loop não
// deveria rodar nenhuma vez - por isso "while" (testa antes), e não
// "do...while" (que sempre executa ao menos uma vez).
while (vagasDisponiveis > 0) {
  console.log("Veículo estacionado.");
  vagasDisponiveis--;
  console.log(`Vagas restantes: ${vagasDisponiveis}`);
}

console.log("Estacionamento lotado!");

// =========================================
// FUNCIONALIDADE 3
// Menu do sistema
// =========================================

const prompt = require("prompt-sync")();

let continuar = "S";

// Estrutura escolhida: DO...WHILE
// O menu precisa aparecer PELO MENOS UMA VEZ, antes mesmo de existir
// qualquer resposta do operador para testar. Como a condição de parada
// (a resposta ser "S" ou "N") só existe DEPOIS que o menu já apareceu
// e a pergunta foi feita, o teste tem que ficar no final do loop -
// exatamente o comportamento do "do...while".
do {
  console.log("\nMENU");
  console.log("1 - Consultar vagas");
  console.log("2 - Registrar entrada");
  console.log("3 - Registrar saída");

  continuar = prompt("Deseja realizar outra operação? (S/N) ");
} while (continuar.toUpperCase() === "S");

console.log("Sistema encerrado.");

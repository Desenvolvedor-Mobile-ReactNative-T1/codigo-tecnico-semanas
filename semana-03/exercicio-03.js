// Exercício – Refatorando múltiplas funções - Correção

// Como essa função só faz "return { ... }", dá pra usar retorno implícito.
// MAS precisa envolver o objeto em parênteses, senão o JS confunde as
// chaves do objeto com as chaves do corpo da função.
const abrirChamado = (numero, solicitante, categoria) => ({
  numero: numero,
  solicitante: solicitante,
  categoria: categoria,
  status: "Aberto",
});

// Essa função tem duas instruções (atualiza o status E depois retorna),
// então precisa de corpo em bloco (chaves) e return explícito.
const atualizarStatus = (chamado, novoStatus) => {
  chamado.status = novoStatus;
  return chamado;
};

// Só uma instrução (return com template literal) → retorno implícito de novo.
const gerarMensagem = (chamado) =>
  `Chamado #${chamado.numero} está ${chamado.status}.`;

const chamado = abrirChamado(102, "Maria Oliveira", "Rede");

console.log(chamado);

const chamadoAtualizado = atualizarStatus(chamado, "Em atendimento");

console.log(chamadoAtualizado);

console.log(gerarMensagem(chamadoAtualizado));

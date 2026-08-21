const categorias = document.querySelectorAll(".categoria");
const botoesPedir = document.querySelectorAll(".botao-pedir");
const resultado = document.getElementById("resultado");

console.log(categorias);

categorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const ativa = document.querySelector(".categoria.ativa");

    if (ativa) {
      ativa.classList.remove("ativa");
    }

    botao.classList.add("ativa");
  });
});

botoesPedir.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Consulta
    const cardAtivo = document.querySelector(".pedido-ativo");

    // Verificando se tem um card ativo
    if (cardAtivo) {
      cardAtivo.classList.remove("pedido-ativo");

      const botaoAnterior = cardAtivo.querySelector(".botao-pedir");
      botaoAnterior.style.background = "";
      botaoAnterior.textContent = "Pedir";
    }

    const card = botao.closest(".restaurante-card");
    card.classList.add("pedido-ativo");

    botao.style.background = "#16a34a";
    botao.textContent = "Pedido!";

    const name = card.querySelector(".nome-restaurante").textContent;
    resultado.innerHTML = `Pedido enviado para <strong>${name}</strong>!`;
  });
});

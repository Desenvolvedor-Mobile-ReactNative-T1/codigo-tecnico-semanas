const categorias = document.querySelectorAll(".categoria");
const botoesPedir = document.querySelectorAll(".botao-pedir");
const resultado = document.getElementById("resultado");

categorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const ativa = document.querySelector(".categoria.ativa");

    if (ativa) {
      ativa.classList.remove("ativa");
    }

    botao.classList.add("ativa");
  });
});

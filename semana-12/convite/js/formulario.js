import { nomeValido } from "./convite.js";

const formulario = document.querySelector("#formulario");

const campoNome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = campoNome.value;

  if (!nomeValido(nome)) {
    console.log("Cai dentro de if");
    mensagem.textContent = "Digite pelo um nome com pelo menos 3 caracteres";
    return;
  }

  localStorage.setItem("nomeConvite", nome.trim());

  window.location.href = "festa.html";
});

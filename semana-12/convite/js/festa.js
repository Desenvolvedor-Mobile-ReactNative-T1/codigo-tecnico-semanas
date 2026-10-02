import confetti from "canvas-confetti";
import { montarConvite } from "./convite.js";

const mensagem = document.querySelector("#mensagem");
const nome = localStorage.getItem("nomeConvite");

if (nome === null) {
  window.location.href = "index.html";
} else {
  mensagem.textContent = montarConvite(nome);
  confetti();
}

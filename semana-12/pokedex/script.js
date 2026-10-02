const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const statusMensagem = document.querySelector("#status");
const sprite = document.querySelector("#sprite");
const titulo = document.querySelector("#titulo");

async function buscarPokemon(nome) {
  // Monte a URL com o nome. Ache o endereço na documentação da PokéAPI.
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    const response = await fetch(url);
    console.log(response);

    if (response.ok === false) {
      throw new Error("Não achei esse Pokémon.");
    }

    const dados = await response.json();
    console.log(dados);

    titulo.textContent = dados.name;
    sprite.src = dados.sprites.front_default;
  } catch (error) {
    statusMensagem.textContent = error.message;
  }
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = campoNome.value.trim().toLowerCase();
  buscarPokemon(nome);
});

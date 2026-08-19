const title = document.getElementById("titulo-pagina");
console.log("Titulo:", title);

const moviesByClassName = document.getElementsByClassName("filme-card");
console.log("Filmes Encontrados", moviesByClassName.length);

const divs = document.getElementsByTagName("div");
console.log("Divs Encontradas:", divs.length);
console.log(
  "Quantidade de filmes é igual a quantidade de divs?",
  moviesByClassName.length === divs.length,
);

const inputSearch = document.querySelector("#busca");
console.log("Campo de busca", inputSearch);

const firstMovie = document.querySelector(".filme-card");
console.log("Primeiro filme", firstMovie.textContent);

const movies = document.querySelectorAll(".filme-card");

movies.forEach((movie) => {
  console.log(movie.textContent);
});

const description = document.querySelector("#descricao");
description.textContent = `${movies.length} filmes encontrados`;

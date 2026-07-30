const livros = [
  "Dom Casmurro",
  "1984",
  "O Pequeno Príncipe",
  "Harry Potter",
  "Clean Code",
  "Código Limpo",
];

for (let i = 0; i < livros.length; i++) {
  if (livros[i] === "Clean Code") {
    console.log("⭐ Livro recomendado pelos desenvolvedores");
  }
  console.log(`${i + 1} - ${livros[i]}`);
}

console.log(`Total de livros cadastrados: ${livros.length}`);

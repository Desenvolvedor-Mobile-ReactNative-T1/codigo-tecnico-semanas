const usuario = {
  nome: "Jorge",
  idade: 24,
  email: "jorge@email.com",
  cidade: "Florianopolis",
  profissao: "Desenvolvedor",
};

// =======================================
// Exercício 1 - Object.keys()
// =======================================

console.log("=== Exercício 1 ===");

const chaves = Object.keys(usuario);

chaves.forEach((chave) => {
  console.log(chave);
});

// =======================================
// Exercício 2 - Object.values()
// =======================================

console.log("\n=== Exercício 2 ===");

const valores = Object.values(usuario);

valores.forEach((valor) => {
  console.log(valor);
});

// =======================================
// Desafio - Object.keys() + Object.values()
// =======================================

console.log("\n=== Desafio ===");

Object.keys(usuario).forEach((chave) => {
  console.log(`${chave}: ${usuario[chave]}`);
});

//Exercício Prático - Manipular dados de uma API pública
async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");

  const dados = await response.json();

  return dados.users;
}

async function main() {
  const usuarios = await buscarUsuarios();

  // ======================================================
  // EXERCÍCIO 1 - forEach
  // Exiba o nome, idade e e-mail de todos os usuários.
  // ======================================================

  console.log("========== EXERCÍCIO 1 ==========");

  usuarios.forEach((usuario) => {
    console.log(`Nome: ${usuario.firstName} ${usuario.lastName}`);
    console.log(`Idade: ${usuario.age} anos`);
    console.log(`E-mail: ${usuario.email}`);
    console.log("-----------------------------");
  });

  // ======================================================
  // EXERCÍCIO 2 - map
  // Crie um novo array contendo apenas os nomes completos.
  // ======================================================

  console.log("\n========== EXERCÍCIO 2 ==========");

  const nomes = usuarios.map((usuario) => {
    return `${usuario.firstName} ${usuario.lastName}`;
  });

  console.log(nomes);

  // ======================================================
  // EXERCÍCIO 3 - filter
  // Filtre apenas usuários com idade maior ou igual a 30.
  // ======================================================

  console.log("\n========== EXERCÍCIO 3 ==========");

  const maioresDe30 = usuarios.filter((usuario) => {
    return usuario.age >= 30;
  });

  console.log(maioresDe30);

  // ======================================================
  // EXERCÍCIO 4 - find
  // Encontre o usuário chamado Emily.
  // ======================================================

  console.log("\n========== EXERCÍCIO 4 ==========");

  const emily = usuarios.find((usuario) => {
    return usuario.firstName === "Emily";
  });

  console.log(emily);

  // ======================================================
  // EXERCÍCIO 5 - some
  // Existe algum usuário menor de idade?
  // ======================================================

  console.log("\n========== EXERCÍCIO 5 ==========");

  const existeMenor = usuarios.some((usuario) => {
    return usuario.age < 18;
  });

  console.log(existeMenor);

  // ======================================================
  // EXERCÍCIO 6 - every
  // Todos possuem e-mail?
  // ======================================================

  console.log("\n========== EXERCÍCIO 6 ==========");

  const todosPossuemEmail = usuarios.every((usuario) => {
    return usuario.email !== "";
  });

  console.log(todosPossuemEmail);

  // ======================================================
  // EXERCÍCIO 7 - reduce
  // Calcule a soma das idades.
  // ======================================================

  console.log("\n========== EXERCÍCIO 7 ==========");

  const somaIdades = usuarios.reduce((total, usuario) => {
    return total + usuario.age;
  }, 0);

  console.log(`Soma das idades: ${somaIdades}`);

  // ======================================================
  // EXERCÍCIO 8 - reduce
  // Calcule a idade média.
  // ======================================================

  console.log("\n========== EXERCÍCIO 8 ==========");

  const mediaIdades = somaIdades / usuarios.length;

  console.log(`Idade média: ${mediaIdades.toFixed(2)} anos`);
}

main();

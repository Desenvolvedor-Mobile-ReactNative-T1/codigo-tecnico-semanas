//Exercício Prático – Loja de Informática V2

const precos = [80, 150, 950, 4200, 320];

// 1. every()
const todosAcima50 = precos.every((preco) => {
  return preco > 50;
});

console.log(todosAcima50);

// -----------------------------

// 2. some()
const existeAcima4000 = precos.some((preco) => {
  return preco > 4000;
});

console.log(existeAcima4000);

// -----------------------------

// 3. reduce()
const total = precos.reduce((acumulador, preco) => {
  return acumulador + preco;
}, 0);

console.log(total);

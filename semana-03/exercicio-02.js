function cupomValido(codigo) {
  return codigo === "PROMO10";
}

function aplicarDesconto(valor, codigo) {
  if (cupomValido(codigo)) {
    return valor - valor * 0.1;
  }
  return valor;
}

// Testes
console.log(cupomValido("PROMO10")); // true
console.log(cupomValido("promo10")); // false (case sensitive)
console.log(cupomValido("SEMCUPOM")); // false

console.log(aplicarDesconto(100, "PROMO10")); // 90
console.log(aplicarDesconto(100, "XYZ")); // 100

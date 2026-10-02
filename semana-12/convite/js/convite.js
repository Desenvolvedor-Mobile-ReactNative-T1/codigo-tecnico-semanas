export function nomeValido(nome) {
  return nome.trim().length > 2;
}

export function montarConvite(nome) {
  const nomeLimpo = nome.trim();
  const nomeConcatenado = `${nome} - Usuário`;

  return `Você está sendo convidado, ${nomeConcatenado}`;
}

# Exercício — Debug no VS Code: caixa da CineMatch

A CineMatch fechou o caixa do dia e o número não fecha. O `caixa.js` **roda**. A lista de pedidos aparece certa. O **total** não.

Este exercício é **só Node**, no terminal. A correção vale se vocês **acharem o bug com o debug do VS Code**, não chutando o conserto.

## Regras do caixa

- Inteira = preço cheio.
- Meia = metade do preço.
- Cada combo custa **R$ 22** (o combo **não** entra na meia).
- O cupom **CINE10** tira **10% uma vez**, sobre o total do dia.

Pedidos de hoje:

| Filme         | Tipo    | Qtd | Preço | Combos |
| ------------- | ------- | --- | ----- | ------ |
| Duna          | inteira | 2   | 32    | 1      |
| Duna          | meia    | 2   | 32    | 0      |
| Interestelar  | inteira | 3   | 28    | 2      |

Conta esperada:

1. 2 × 32 + 1 × 22 = **86**
2. 2 × 16 = **32**
3. 3 × 28 + 2 × 22 = **128**
4. 86 + 32 + 128 = **246**
5. 246 − 10% = **R$ 221.40**

## O que fazer

1. Nesta pasta:

```bash
node caixa.js
```

Anote o total que apareceu. Não é 221.40.

2. Abra o `caixa.js` e coloque um *breakpoint* (bolinha vermelha) na linha do `for` dentro de `fecharCaixa`. Clique à esquerda do número da linha.

3. Aperte **F5** e escolha **Node.js**. Se aparecer **Debug: caixa CineMatch**, use essa config.

4. O programa para na bolinha. No painel **Variáveis**, olhe `pedido` e `total`.

5. **F10** anda uma linha. **F11** entra na função. **F5** segue até o próximo breakpoint (ou o fim). Acompanhe o `total` a cada volta do loop.

6. Corrija o `caixa.js` e rode de novo:

```bash
node caixa.js
```

## Pronto quando

- `node caixa.js` mostra `Total: R$ 221.40`.
- Inteira, meia e combo entram certos na conta.
- O cupom de 10% vale **uma vez** sobre o total do dia.

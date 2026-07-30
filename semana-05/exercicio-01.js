// SISTEMA DE CADASTRO - APP DE DELIVERY "RAPIDINHO"

class Usuario {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;

    if (telefone === "") {
      this.telefone = "Não informado";
    } else {
      this.telefone = telefone;
    }
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Email: ${this.email}`);
    console.log(`Telefone: ${this.telefone}`);
  }
}

class Cliente extends Usuario {
  constructor(nome, email, telefone, endereco, limiteCredito) {
    super(nome, email, telefone);
    this.endereco = endereco;
    this.limiteCredito = limiteCredito;
  }

  calcularDesconto(valorCompra) {
    if (valorCompra > 100) {
      return valorCompra * 0.1;
    }
    return 0;
  }

  exibirDadosCliente() {
    this.exibirDados();
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Limite de crédito: R$${this.limiteCredito}`);
  }
}

class Entregador extends Usuario {
  constructor(nome, email, telefone, veiculo, placa, valorPorEntrega) {
    super(nome, email, telefone);
    this.veiculo = veiculo;
    this.placa = placa;
    this.valorPorEntrega = valorPorEntrega;
  }

  calcularGanhoDia(qtdEntregas) {
    return qtdEntregas * this.valorPorEntrega;
  }

  exibirDadosEntregador() {
    this.exibirDados();
    console.log(`Veículo: ${this.veiculo}`);
    console.log(`Placa: ${this.placa}`);
    console.log(`Ganho do dia (5 entregas): R$${this.calcularGanhoDia(5)}`);
  }
}

// Instâncias
const cliente1 = new Cliente(
  "Ana Silva",
  "ana@email.com",
  "48999990000",
  "Rua das Flores, 123",
  500,
);
const cliente2 = new Cliente(
  "Carla Souza",
  "carla@email.com",
  "",
  "Av. Central, 456",
  1000,
);

const entregador1 = new Entregador(
  "Bruno Costa",
  "bruno@email.com",
  "48988887777",
  "Moto",
  "ABC-1234",
  8,
);
const entregador2 = new Entregador(
  "Diego Alves",
  "diego@email.com",
  "48977776666",
  "Bicicleta",
  "XYZ-9999",
  5,
);

// Array unificado
const usuariosCadastrados = [cliente1, cliente2, entregador1, entregador2];

// Loop reforçando o método herdado
usuariosCadastrados.forEach((usuario) => {
  usuario.exibirDados();
  console.log("---");
});
// Dados completos
cliente1.exibirDadosCliente();
entregador1.exibirDadosEntregador();

// DESAFIO EXTRA
console.log(
  `Desconto do cliente1 em compra de R$250: R$${cliente1.calcularDesconto(250)}`,
);
console.log(
  `Ganho do dia do entregador2 com 8 entregas: R$${entregador2.calcularGanhoDia(8)}`,
);

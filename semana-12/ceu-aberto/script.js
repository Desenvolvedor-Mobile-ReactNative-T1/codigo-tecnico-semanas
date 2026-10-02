import dayjs from "dayjs";

const botaoCelsius = document.querySelector("#botao-celsius");
const botaoFahrenheit = document.querySelector("#botao-fahrenheit");
const cidadeSelect = document.querySelector("#cidade");
const botaoLocalizacao = document.querySelector("#botao-localizacao");
const status = document.querySelector("#status");
const selo = document.querySelector("#selo");
const titulo = document.querySelector("#titulo");
const temperatura = document.querySelector("#temperatura");
const condicao = document.querySelector("#condicao");
const sensacao = document.querySelector("#sensacao");
const umidade = document.querySelector("#umidade");
const vento = document.querySelector("#vento");

const idsPrevisao = [
  "temp-hoje",
  "temp-segunda",
  "temp-terca",
  "temp-quarta",
  "temp-quinta",
  "temp-sexta",
  "temp-sabado",
];

const cidades = [
  {
    value: "florianopolis",
    nome: "Florianópolis",
    selo: "Floripa",
    latitude: -27.5954,
    longitude: -48.548,
  },
  {
    value: "sao-paulo",
    nome: "São Paulo",
    selo: "SP",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    value: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    selo: "Rio",
    latitude: -22.9068,
    longitude: -43.1729,
  },
];

let climaAtual;

// dayjs.locale("pt-br");

function atualizarTela(cidade, clima, unidade) {
  const temperaturaAgora = Math.round(clima.current.temperature_2m);
  const sensacaoTermica = Math.round(clima.current.apparent_temperature);

  selo.textContent = cidade.selo;
  titulo.textContent = `Tempo em ${cidade.nome} hoje`;
  condicao.textContent = traduzirCondicao(clima.current.weather_code);
  umidade.textContent = `${clima.current.relative_humidity_2m}%`;
  vento.textContent = `${Math.round(clima.current.wind_speed_10m)} km/h`;

  if (unidade === "fahrenheit") {
    temperatura.textContent = `${paraFahrenheit(temperaturaAgora)} °F`;
    sensacao.textContent = `${paraFahrenheit(sensacaoTermica)} °F`;
    botaoCelsius.classList.remove("ativa");
    botaoFahrenheit.classList.add("ativa");
  } else {
    temperatura.textContent = `${temperaturaAgora} °C`;
    sensacao.textContent = `${sensacaoTermica} °C`;
    botaoFahrenheit.classList.remove("ativa");
    botaoCelsius.classList.add("ativa");
  }

  idsPrevisao.forEach((id, indice) => {
    const elemento = document.querySelector(`#${id}`);
    const artigo = elemento.closest("article");
    const dataIso = clima.daily.time[indice];
    const max = Math.round(clima.daily.temperature_2m_max[indice]);
    const min = Math.round(clima.daily.temperature_2m_min[indice]);

    if (unidade === "fahrenheit") {
      elemento.textContent = `${paraFahrenheit(max)}° / ${paraFahrenheit(min)}°`;
    } else {
      elemento.textContent = `${max}° / ${min}°`;
    }

    elemento.nextElementSibling.textContent = traduzirCondicao(
      clima.daily.weather_code[indice],
    );
    artigo.querySelector("h3").textContent = nomeDoDia(dataIso, indice);

    const time = artigo.querySelector("time");
    time.dateTime = dataIso;
    time.textContent = formatarData(dataIso);
  });
}

function mostrarStatus(texto) {
  status.textContent = texto;
}

function distanciaAte(cidade, latitude, longitude) {
  // Quanto maior o número, mais longe. Não precisa de fórmula de GPS:
  // só comparamos a diferença de latitude + longitude.
  return (
    Math.abs(cidade.latitude - latitude) +
    Math.abs(cidade.longitude - longitude)
  );
}

function cidadeMaisProxima(latitude, longitude) {
  // Começa na primeira cidade da lista e troca se achar outra mais perto.
  let maisProxima = cidades[0];

  for (let i = 1; i < cidades.length; i++) {
    const cidade = cidades[i];

    if (
      distanciaAte(cidade, latitude, longitude) <
      distanciaAte(maisProxima, latitude, longitude)
    ) {
      maisProxima = cidade;
    }
  }

  return maisProxima;
}

async function carregarCidade(chaveCidade) {
  const cidade = cidades.find((item) => item.value === chaveCidade);
  const unidade = localStorage.getItem("unidadeTemperatura") || "celsius";

  mostrarStatus("Carregando...");
  climaAtual = await buscarTempo(cidade);
  mostrarStatus("");

  if (climaAtual) {
    atualizarTela(cidade, climaAtual, unidade);
  } else {
    mostrarStatus("Não foi possível carregar o clima.");
  }
}

function usarMinhaLocalizacao() {
  if (!navigator.geolocation) {
    mostrarStatus("Seu navegador não tem geolocalização.");
    return;
  }

  mostrarStatus("Buscando sua localização...");

  navigator.geolocation.getCurrentPosition(
    (posicao) => {
      const cidade = cidadeMaisProxima(
        posicao.coords.latitude,
        posicao.coords.longitude,
      );

      cidadeSelect.value = cidade.value;
      localStorage.setItem("cidade", cidade.value);
      carregarCidade(cidade.value);
    },
    () => {
      mostrarStatus("Não foi possível obter a localização.");
    },
  );
}

botaoCelsius.addEventListener("click", () => {
  localStorage.setItem("unidadeTemperatura", "celsius");

  if (climaAtual) {
    const cidade = cidades.find((item) => item.value === cidadeSelect.value);
    atualizarTela(cidade, climaAtual, "celsius");
  }
});

botaoFahrenheit.addEventListener("click", () => {
  localStorage.setItem("unidadeTemperatura", "fahrenheit");

  if (climaAtual) {
    const cidade = cidades.find((item) => item.value === cidadeSelect.value);
    atualizarTela(cidade, climaAtual, "fahrenheit");
  }
});

cidadeSelect.addEventListener("change", () => {
  localStorage.setItem("cidade", cidadeSelect.value);
  carregarCidade(cidadeSelect.value);
});

botaoLocalizacao.addEventListener("click", usarMinhaLocalizacao);

const cidadeSalva = localStorage.getItem("cidade") || "florianopolis";

cidadeSelect.value = cidadeSalva;
carregarCidade(cidadeSalva);

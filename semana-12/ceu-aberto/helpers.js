function paraFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function traduzirCondicao(codigo) {
  const condicoes = {
    0: "Céu limpo",
    1: "Predominantemente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina",
    51: "Chuvisco",
    53: "Chuvisco",
    55: "Chuvisco",
    61: "Chuva fraca",
    63: "Chuva",
    65: "Chuva forte",
    80: "Pancadas de chuva",
    81: "Pancadas de chuva",
    82: "Pancadas de chuva forte",
    95: "Trovoada",
    96: "Trovoada",
    99: "Trovoada",
  };

  return condicoes[codigo] || "Condição desconhecida";
}

function formatarData(iso) {
  return dayjs(`${iso}T12:00:00`).format("MM-DD-YYYY");
}

function nomeDoDia(iso, indice) {
  if (indice === 0) {
    return "Hoje";
  }

  const nome = dayjs(`${iso}T12:00:00`).format("dddd");
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

async function buscarTempo(cidade) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${cidade.latitude}&longitude=${cidade.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America/Sao_Paulo&forecast_days=7`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const dados = await response.json();
    return dados;
  } catch (erro) {
    console.error("Falhou:", erro);
  }
}

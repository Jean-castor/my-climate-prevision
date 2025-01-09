/* eslint-disable react/prop-types */

import "./FiveDaysStyle.css";
const FiveDaysWeather = ({ weatherFiveDays }) => {
  console.log(weatherFiveDays);

  // const dailyForecast = {};


   const dailyForecast = Array.isArray(weatherFiveDays) ? weatherFiveDays : [];

  // Filtra os dados para incluir apenas aqueles que correspondem ao horário diurno
   /*
  const dayTimeForecast = dailyForecast.filter(day => {
    const hour = new Date(day.dt * 1000).getHours();
    return hour >= 6 && hour <= 18; // Considera o horário diurno entre 6h e 18h
  }); */

  // weatherFiveDays.list é um array com 40 posições ( dias com previsão de 3 em 3 horas )

  // O for abaixo percorre o array weatherFiveDays.list e exibe a data de cada previsão
  // Ele converte o timestamp (dt) para uma data legível

  for (let forecast of weatherFiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString(); // 1000 para converter de segundos para milisegundos

    // Se a data não existir no objeto dailyForecast, ele cria uma chave com a data e armazena a previsão
    // Ele funciona como dailyForecast.alguma coisa,  porém de forma dinâmica com a variável [date]
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  
  const nextFiveDays = Object.values(dailyForecast).slice(0,10); // Pega os próximos 5 dias
  console.log(nextFiveDays);

  function getWeekDay(date) {
    const weekDay = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    // Este é o retorno da função e onde for chamada a função, será exibido o valor de weekDay
    return weekDay;
  }

  const hours = nextFiveDays.map((day) => {
    return day.dt_txt.slice(11, 16);
  });

  console.log("Hora da previsão " + hours);
  
  return (
    <div className="weather-five">
      <h3>Próximos 5 dias</h3>
      <div className="weather-list">
        {nextFiveDays.map((day) => (
          <div key={day.dt} className="weather-item">
            <p className="get-day">{getWeekDay(day)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="Icone do tempo"
            />
            <p className="description-day">
              {day.weather[0].description}
            </p>

            <p className="description-day">
              {day.dt_txt.slice(11, 16)}
            </p>
            
            <p>
              Temp:{" "}
              <span className="temp-min-max">
                Min {Math.round(day.main.temp_min)} °C / Máx{" "}
                {Math.round(day.main.temp_max)} °C
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDaysWeather;

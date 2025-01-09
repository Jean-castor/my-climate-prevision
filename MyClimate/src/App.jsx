import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfos from "./components/WeatherInfos/WeatherInfos";
import FiveDaysWeather from "./components/FiveDays/FiveDaysWeather";
import iconTitle from "././assets/icon-vento.png"; // Importe a imagem


function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();

  const inputRef = useRef(null);

  async function searchCity() {
    // console.log(inputRef.current.value);

    const city = inputRef.current.value;
    if (!city) {
      alert("Digite o nome da cidade");
      return;
    }

    const apiKey = "a5b780d4d6cabb803a0f16cdd37bcd07";
    const language = "pt_br";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${language}&units=${units}`;
    const urlForFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;


   try {
      // Pegando os dados da API
      const responseApi = await axios.get(url);

      const fiveDaysRequest = await axios.get(urlForFiveDays);

      // Previsão do tempo para 5 dias
      setWeatherFiveDays(fiveDaysRequest.data);
      // Previsão do tempo para o dia atual
      setWeather(responseApi.data);
    } catch {
      alert("Local não encontrado. Por favor, tente novamente.");
    }
  }

  console.log(weather);


  return (
    <div>
      <div className="container">
        <h1>
          {" "}
          MyClimate <img className="icon-title" src={iconTitle} alt="" />
        </h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Informe a cidade, país ou estado"
          required
        />
        <button onClick={searchCity}>Buscar</button>
        {weather && <WeatherInfos weather={weather} />}
        {weatherFiveDays && (
          <FiveDaysWeather weatherFiveDays={weatherFiveDays} />
        )}
      </div>
    </div>
  );
}

export default App;

/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import "./WeatherInfos.css";

const WeatherInfos = ({ weather }) => {
  
  const backgroundImages = {
    'algumas nuvens': 'https://i.pinimg.com/564x/8f/31/4f/8f314fe591da98958c21d10db8c615af.jpg',
    'chuva leve': 'https://i.pinimg.com/736x/3e/96/ba/3e96ba5e50cc5906f252ea287da57ba4.jpg',
    'céu limpo': 'https://i.pinimg.com/736x/65/98/8c/65988cd8493a6d10137cb1151dc34ff6.jpg',
  };
  

  const description = weather?.weather?.[0]?.description || 'desconhecido';
  const bgImage = backgroundImages[description] || 'https://exemplo.com/default.jpg';


  useEffect(() => {
    const elemento = document.getElementById('background-element');
    if (elemento) {
      elemento.style.backgroundImage = `url(${bgImage})`;
    }
  }, [bgImage]);


  return (
    <div className="weather-container">
      <h2>Local: {`${weather.name} - ${weather.sys.country}`}</h2>
      
      <div className="weather_info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Icone do tempo"
        />
        <p className="temperature">
          Temperatura: {Math.round(weather.main?.temp)} °C
        </p>
      </div>

      <p className="description">
        Descrição: {weather.weather?.[0].description}
      </p>

      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main?.feels_like)}</p>
        <p>Umidade: {`${weather.main?.humidity}%`}</p>
        <p>Pressão ATM: {weather.main?.pressure} </p>
      </div>
    </div>
  );
};

export default WeatherInfos;

/*

 <h2>Local: {`${weather.name} - ${weather.sys.country}` }</h2>
      
      <div className="weather_info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Icone do tempo"
        />
        <p className="temperature">
          Temperatura: {Math.round(weather.main?.temp)} °C
        </p>
      </div>

      <p className="description">
        Descrição: {weather.weather?.[0].description}
      </p>

      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main?.feels_like)}</p>
        <p>Umidade: {`${weather.main?.humidity}%`}</p>
        <p>Pressão ATM: {weather.main?.pressure} </p>
      </div>
    </div>

*/
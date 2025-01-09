

  import PropTypes from 'prop-types';
  
    const DescriptionForBG = ( { weather } ) => {

const backgroundImages = {
    'algumas nuvens': 'https://i.pinimg.com/564x/8f/31/4f/8f314fe591da98958c21d10db8c615af.jpg',
    'chuva moderada': 'https://i.pinimg.com/736x/3e/96/ba/3e96ba5e50cc5906f252ea287da57ba4.jpg',
  };
  
 const description = weather.weather[0].description;
  // NOTE - A variável bgImage recebe a imagem de fundo de acordo com a descrição do clima

  const bgImage = backgroundImages[description] || 'https://exemplo.com/default.jpg';
    
  return (
    <div className="weather-container">
      {description === "chuva moderada" && (
          <div
            className="weather-container"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '400px',
              zIndex: '-100',
            }}
          ></div>
        )}

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
  );
};

DescriptionForBG.propTypes = {
  weather: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DescriptionForBG;

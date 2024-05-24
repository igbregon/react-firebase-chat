import { useUserStore } from '../../../lib/userStore'
import './userinfo.css'
import { useEffect,useState } from 'react'

const Userinfo = () => {

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4560bf6898daa70f9b05d77b2fc634b3`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  function convertToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  const {currentUser} = useUserStore()
  return (
    <div className='userinfo'>
        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className="weather">
        <button onClick={handleLocationClick}>Clima</button>
        {location && !weather ? <p>Loading weather data...</p> : null}
        {weather ? (
          <div>
            <p>Ubicacion: {weather.name}</p>
            <p>Temperatura: {convertToCelsius(weather.main.temp).toFixed(2)} °C</p>
          </div>
        ) : null}
        </div>
        <div className="icons">
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo
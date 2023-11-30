import React from 'react';
import './weatherStyles.css';

const LiveWeather = () => {
  return (
    <div className="weather">
      <div className="weather-block">
        <div className="top">
          <div className="city-info">
            <p className="city-name">Reykjavík</p>
            <p className="status">Sunny</p>
          </div>
          <div className="weather-icon">
            <img src="weather-icons/01d.png" alt="Sunny Icon" />
          </div>
        </div>
        <div className="weather-info">
          <div className="temp">
            <span>20°C</span>
          </div>
          <div className="details">
            <div className="row">
              <span className="title">Details</span>
            </div>
            <div className="row">
              <span className="title">Feels like</span>
              <span className="value">22°C</span>
            </div>
            <div className="row">
              <span className="title">Wind</span>
              <span className="value">2 m/s</span>
            </div>
            <div className="row">
              <span className="title">Humidity</span>
              <span className="value">15%</span>
            </div>
            <div className="row">
              <span className="title">Pressure</span>
              <span className="value">15 hPs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveWeather;
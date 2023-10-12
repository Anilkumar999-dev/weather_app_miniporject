import React from 'react';
import './WheaterDetailsCard.css';
import Map from './Map';

const WeatherDetailsCard = ({ city }) => {
    if (!city) {
        return (
            <div className="weather-details-card">
                <p>Select a city to see weather details.</p>
            </div>
        );
    }

    const { coordinates, name, weather } = city;

    return (
        <div className='details-card'>
            <div className='arrangement'>
                <p>{name}</p>
                <p>star</p>
            </div>
            <hr className='hr' />
            <div className='weather-details-container'>
                <h3>Weather Details</h3>
                <p>Temperature: {weather.temperature}°C</p>
                <p>Condition: {weather.condition}</p>
                <p>Humidity: {weather.humidity}%</p>
                <div className="leaflet-map">
                    <Map lat={coordinates.lat || 0} lon={coordinates.lon || 0} />
                </div>
            </div>
        </div>
    );
}

export default WeatherDetailsCard;

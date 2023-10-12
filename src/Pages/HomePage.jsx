import React from 'react'
import './Page.css'

const HomePage = () => {
    return (
    <div class="container"><h2>Favorite Cities</h2>
        <div class="city-card">
            <div class="city-name">New York</div>
            <div class="weather-info">Temperature: 25°C</div>
            <div class="weather-info">Weather: Sunny</div>
        </div>
        <div class="city-card">
            <div class="city-name">London</div>
            <div class="weather-info">Temperature: 18°C</div>
            <div class="weather-info">Weather: Cloudy</div>
        </div>  
        <button class="add-city-button">Add New City</button>   
    </div>    
       )
}

export default HomePage
import React, { useState } from 'react'
import '../Pages/Page.css'
import WheaterDetailsCard from './WheaterDetailsCard'
import CityModalPage from '../Pages/CityModalPage';
import Data from '../data.json'

const CitiesList = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const onCityAdd = (city) => {
        setCities((prevCities) => [...prevCities, city]);
        closeModal();
    };

    const handleListCardClick = (city) => {
        setSelectedCity(city);
    };


    return (
        <div className='alignment'>
            <div className='list-section'>
                <div className='add'>
                    <p>cities</p>
                    <button onClick={openModal}>Add City</button>
                </div>
                <div>
                    <ul>
                        {cities.map((city) => (
                            <li
                                key={city.name}
                                className='list-card'
                                onClick={() => handleListCardClick(city)}
                            >
                                <p>{city.name}</p>
                                <p>{city.weather.temperature} deg</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <WheaterDetailsCard city={selectedCity} />
            <CityModalPage isOpen={isModalOpen} onClose={closeModal} cities={Data.cities} onCityAdd={onCityAdd} />
        </div>)
}

export default CitiesList
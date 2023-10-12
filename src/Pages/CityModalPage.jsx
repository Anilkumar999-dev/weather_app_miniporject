import React, { useState } from 'react';
import './Page.css';

const CityModalPage = ({ isOpen, onClose, cities, onCityAdd }) => {
    const [searchText, setSearchText] = useState('');

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Close</button>
                <h2>Add City</h2>
                <input
                    type="text"
                    placeholder="Search for a city"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <ul>
                    {filteredCities.map((city) => (
                        <li key={city.name}>
                            {city.name}
                            <button onClick={() => onCityAdd(city)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CityModalPage;

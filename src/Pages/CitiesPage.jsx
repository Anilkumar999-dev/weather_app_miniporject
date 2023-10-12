import React from 'react'
import './Page.css'
import CitiesList from '../Components/CitiesList'

const CitiesPage = () => {
    return (
        <div className='content'>
            <h1>Cities Page</h1>
            <CitiesList />
        </div>
    )
}

export default CitiesPage
import React from 'react'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/cities">Cities</a></li>
            </ul>
        </div>
    )
}

export default SideBar
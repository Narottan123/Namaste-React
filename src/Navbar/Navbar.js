import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    
    <div className='header'>
        <div className='logo'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAu0zV4EwLlS8CE4BiXW4ddtvGtcWkqHJ0UtOoxSI&s' alt="logo"/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
    
  )
}

export default Navbar
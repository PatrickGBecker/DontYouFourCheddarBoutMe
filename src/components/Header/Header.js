import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
       <Link to='/favorites'>
          <button className='favorites'>Favorites</button>
      </Link>
      <header className='header'>
        <Link to='/'>
          <h1>Don't You Four Cheddar 'Bout Me!</h1>
        </Link>
        
      </header>
    </div>
  )
}

export default Header;
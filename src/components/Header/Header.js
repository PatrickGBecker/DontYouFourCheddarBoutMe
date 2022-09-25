import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <h1>Don't You Four Cheddar 'Bout Me!</h1>
        </Link>
      </header>
    </>
  )
}

export default Header;
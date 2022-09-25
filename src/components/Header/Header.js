import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='hogwarts'>
        <Link to='/'>
          <h1>Don't You Four Cheddar 'Bout Me!</h1>
          <p>A character guide to learn more about Americ'as best family-friendly cartoon!</p>
        </Link>
      </header>
    </>
  )
}

export default Header;
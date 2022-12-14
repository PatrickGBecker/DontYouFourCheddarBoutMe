import React from "react";
import './Favorites.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Favorites = ({ favoriteCharacters, removeFavorite }) => {
  window.scroll(0,0);
  const formatCharacters = favoriteCharacters.map(favoriteCharacter => {
    return (
      <div className='favorite-container' key={favoriteCharacter.id}>
        <img className='character-poster' src={favoriteCharacter.image} alt={`${favoriteCharacter.name} information`}/>
        <div className="info-container">
          <p className='details'>Name: {favoriteCharacter.name}</p>
          <p className='details'>Age: {favoriteCharacter.age}</p>
          <p className='details'>Gender: {favoriteCharacter.gender}</p>
          <p className='details'>Hair Color: {favoriteCharacter.hairColor}</p>
          <p className='details'>Occupation: {favoriteCharacter.occupation}</p>
          <p className='details'>First episode: {favoriteCharacter.firstEpisode}</p>
          <p className='details'>This character is voiced by {favoriteCharacter.voicedBy}</p>
         <a target="wiki-link" className='wiki-link' href={`${favoriteCharacter.wikiUrl}`}>Find Out More!</a>
        </div>
          <button className="trash-btn" onClick={() => removeFavorite(favoriteCharacter.id)}>🗑</button>
       </div>
    )
  })
  return (
    <>
      {formatCharacters}
       <Link to ='/DontYouFourCheddarBoutMe/'>
          <button className="go-back">GO BACK</button>
        </Link>
    </>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCharacters: PropTypes.array,
  removeFavorite: PropTypes.func
}
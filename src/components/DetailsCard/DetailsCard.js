import React from "react";
import './DetailsCard.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DetailsCard = ({ characters, addFavoriteCharacter, id }) => {
  window.scroll(0,0);
  const singleCharacter = characters.find(character => parseInt(id) === character.id)
  return (
    <>
      <div className='details-card'>
        <img className='character-poster' src={singleCharacter.image} alt={`${singleCharacter.name} information`}/>
        <div className="info-container">
          <p className='details'>{singleCharacter.character}</p>
          <p className='details'>Age: {singleCharacter.age}</p>
          <p className='details'>Gender: {singleCharacter.gender}</p>
          <p className='details'>Hair Color: {singleCharacter.hairColor}</p>
          <p className='details'>Occupation: {singleCharacter.occupation}</p>
          <p className='details'>First episode: {singleCharacter.firstEpisode}</p>
          <p className='details'>This character is voiced by {singleCharacter.interpretedBy}.</p>
         <p className='details'>Find out even more!{singleCharacter.wikiUrl}</p>
        </div>
      </div>
      <div className='goback-fav'>
        <Link to ='/'>

          <button className="go-back">🪄 GO BACK 🪄</button>
        </Link>
        <Link to ='/favorites'>
          <button className='add-favorite' onClick={() => addFavoriteCharacter(singleCharacter)}> 🪄 ADD FAVORITES 🪄 </button>
        </Link>
        <Link to='/favorites'>
          <button className='favorites' >Favorites</button>
        </Link>
      </div>
    </>
  )
}

export default DetailsCard

DetailsCard.propTypes = {
  characters : PropTypes.array,
  addFavoriteCharacter : PropTypes.func,
  id : PropTypes.string
}
import React from 'react';
import './Characters.css';
import CharactersCard from '../CharactersCard/CharactersCard';
import DetailsCard from '../DetailsCard/DetailsCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Characters = ( { characters }) => {
  const charactersCard = characters.map(character => {
    return (
      <CharactersCard 
      id={character.id}
      key={character.id}
      name={character.name}
      imageUrl={character.image}
      age={character.age}
      gender={character.gender}
      hairColor={character.hairColor}
      occupation={character.occupation}
      firstEpisode={character.firstEpisode}
      voicedBy={character.voicedBy}
      wikiUrl={character.wikiUrl}
      />
    );
  });
  return (
    <section className='characters'>
      {charactersCard}
    </section>
  )
}

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array
}
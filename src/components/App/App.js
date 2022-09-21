import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Characters from '../Characters/Characters';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';

const App = () => {
  const [ characters, setCharacters ] = useState([])
  const [ singleCharacter,  setSingleCharacter ] = useState({})
  const [ favoriteCharacters, setFavoriteCharacters ] = useState([])
  const [ error, setError ] = useState(false)

  useEffect(() => {
    getCharacters()
    .then(data => { 
      console.log(data)
      setCharacters(...characters , data)
    })
    .catch(error => {
      setError(true)
    })
  }, [])


  return (
        <div>

        </div>
  )
}

export default App;
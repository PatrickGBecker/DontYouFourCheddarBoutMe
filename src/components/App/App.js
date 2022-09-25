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

  const addFavoriteCharacter = (character) => {
    setFavoriteCharacters([ ...favoriteCharacters, character ])
  }

  const removeFavorite = (id) => {
    return setFavoriteCharacters(favoriteCharacters.filter(favorite => id !== favorite.id))
  }

  return (
    <div>
      <Header />
      <main className='app'>
        <Switch>
          <Route exact path='/'>
            <Characters characters={characters}/>
          </Route>
          {characters.length && <Route exact path={'/details/:id'} render={( {match} ) => {
            return <DetailsCard characters={characters} addFavoriteCharacter={addFavoriteCharacter} id={match.params.id}/>}}/>}
          <Route exact path='/favorites'>
            {!favoriteCharacters.length ? <h2> 506 characters and you don't like a single one?! Keep readin' buddy! </h2>: 
              <Favorites favoriteCharacters={favoriteCharacters} removeFavorite={removeFavorite}/>}
          </Route>
          <Route
            path='/*' render={()=> <Error />}/>
        </Switch>
      </main>
    </div>
  )
}

export default App;
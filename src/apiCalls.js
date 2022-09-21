export const getCharacters = () => {
  return fetch('https://bobsburgers-api.herokuapp.com/characters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Oh, no Something is going wrong!')
    } else {
      return response.json()
    }
  })
} 
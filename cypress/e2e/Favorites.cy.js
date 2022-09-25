describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bobsburgers-api.herokuapp.com/characters', {
      fixture : 'characters.json',
      fixture: 'favoriteCharacter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details/446');
    cy.get('.favorites').click() 
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h1').contains('Don\'t You Four Cheddar \'Bout Me!');
  });

  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('h1').click()
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should be able to give error message once favorite page is empty', () => {
    cy.get('.app').within(()=> {
      cy.get('h2').contains('506 characters and you don\'t like a single one?! Keep readin\' buddy! ')
    });
    cy.get('h1').click()
    cy.visit('http://localhost:3000/');
  })
})
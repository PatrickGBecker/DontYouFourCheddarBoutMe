describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bobsburgers-api.herokuapp.com/characters', {
      fixture : 'characters.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
  })

  it('Should see the home page', () => {
    cy.get('h1').contains('Don\'t You Four Cheddar \'Bout Me!');
    cy.get('button').contains('Favorites');
    cy.get('.characters').within(() => {
      cy.get('.character-poster').should('have.attr', 'src', 'https://bobsburgers-api.herokuapp.com/images/characters/446.jpg')  
  });
})

  it('Should be able to go back to the home page when clicking logo', () => {
		cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});

  it('Should be able to go to favorites when clinking the button', () => {
		cy.get('button').click();
		cy.url().should('eq', 'http://localhost:3000/favorites');
	});

  it('Should be able to go to details page when clinking the image', () => {
    cy.get('.characters').within(() => {
      cy.get('.character-poster').should('have.attr', 'src', 'https://bobsburgers-api.herokuapp.com/images/characters/446.jpg')  
    });
  });
})
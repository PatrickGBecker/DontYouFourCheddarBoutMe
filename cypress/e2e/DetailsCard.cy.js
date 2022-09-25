describe('Details Card', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bobsburgers-api.herokuapp.com/characters', {
      fixture : 'characters.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details/446');
    cy.get('h1').contains('Don\'t You Four Cheddar \'Bout Me!');
  })

  it('Should be able to go to favorites when clinking the button', () => {
		cy.get('.favorites').click();
		cy.url().should('eq','http://localhost:3000/favorites');
	});
  
  it('Should contain the details about the character', () => {
    cy.get('.details-card').within(()=> {
      cy.get('.character-poster').should('have.attr', 'src', 'https://bobsburgers-api.herokuapp.com/images/characters/446.jpg')
      cy.contains('Shelby Schnabel');
      cy.contains('Female');
      cy.contains('Sharpshooter');
      cy.contains('Gray');
      cy.contains('Lindsey Stoddart'); 
    });
  });
  
  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('[href="/"] > button').click();
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should be able to add character to favorites when clinking the add favorites button', () => {
    cy.get('.favorites').click();
    cy.url().should('eq','http://localhost:3000/favorites')
  });
})
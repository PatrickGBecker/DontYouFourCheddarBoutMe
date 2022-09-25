describe('Error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bobsburgers-api.herokuapp.com/characters', {
      fixture : 'characters.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/e@tMy$horts/');
  })

  it('Should contain the header', () => {
    cy.get('h1').contains('Don\'t You Four Cheddar \'Bout Me!');
  })

  it('Should have error message', () => {
    cy.get('.error-messaging').contains('Welp, that\'s all folks! We got an error');
    cy.get('p').contains('☝ Please return to home page.☝')
  })

  it('Should be able to go back to the home page when clicking logo', () => {
		cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});

})
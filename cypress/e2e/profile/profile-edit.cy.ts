describe('User accesses profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      cy.visit('profile/' + data.id)
    })
  })
  it('successful profile upload', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'manager')
  })
})
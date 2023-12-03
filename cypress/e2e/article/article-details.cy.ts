describe('template spec', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login();
        cy.createArticle();
    });
    afterEach(() => {
        cy.removeArticle();
    });
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});

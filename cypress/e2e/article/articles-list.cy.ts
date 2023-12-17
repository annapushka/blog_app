describe('User goes to ArticleList page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(() => {
      cy.visit('articles');
    });
  });
  it('passes on stubs', () => {
    cy.intercept('GET', '**/articles*', { fixture: 'articles.json' }).as(
      'getArticles',
    );
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('passes', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});

let currentId = '';

describe('User goes to Article page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login();
        cy.createArticle().then((article) => {
            currentId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentId);
    });
    it('and sees the contents of the article', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('and sees the recommendation list', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
});

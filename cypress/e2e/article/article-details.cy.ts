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
    it('and leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentFrom').scrollIntoView();
        cy.addComment('test comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('and gives a rating', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true').should('have.length', 5);
    });
});

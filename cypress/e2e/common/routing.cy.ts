import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User NOT authorized', () => {
        it('Go to home page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go opens profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Jump opens a non-existent route ', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User Authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigates to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Go opens the page with a list of articles', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});

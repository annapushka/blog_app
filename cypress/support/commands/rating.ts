export const setRate = (starsCounts = 5, feedback = 'feedback') => {
  cy.getByTestId(`StarRating.${starsCounts}`).click();
  cy.getByTestId('StarRating.Input').type(feedback);
  cy.getByTestId('StarRating.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCounts: number, feedback: string): Chainable<void>;
        }
    }
}

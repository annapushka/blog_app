import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const updateProfile = () => {
    cy.getByTestId('EditableProfileCardHeader.EditButton')
    cy.getByTestId('ProfileCard.firstname').clear().type('newfirstname');
    cy.getByTestId('ProfileCard.lastname').clear().type('newlastname');
};

export const resetProfile = () => {
};


declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(): Chainable<void>;
        resetProfile(): Chainable<void>;
      }
    }
  }
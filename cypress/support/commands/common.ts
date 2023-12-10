import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';

export const login = (username: string = 'manager', password: string = 'manager') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
      interface Chainable {
        login(email?: string, password?: string): Chainable<User>;
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      }
    }
  }

export const updateProfile = () => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type('newfirstname');
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'test',
        },
        body: {
            id: '3',
            first: 'manager',
            lastname: 'manager',
            age: 38,
            currency: 'RUB',
            country: 'Armenia',
            city: 'Saint P',
            username: 'sashaIT',
            avatar: 'https://thispersondoesnotexist.com/',
        },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(): Chainable<void>;
        resetProfile(profileId: string): Chainable<void>;
      }
    }
  }

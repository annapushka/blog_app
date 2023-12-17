let profileId = '';

describe('User accesses profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('successful profile upload', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'manager');
  });
  it('and editing it', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.firstname').should(
      'have.value',
      'newfirstname',
    );
  });
});

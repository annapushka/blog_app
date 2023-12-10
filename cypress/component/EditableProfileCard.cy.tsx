import { EditableProfileCard } from "@/features/EditableProfileCard";
import { TestProvider } from "@/shared/config/tests/componentRender/componentRender";

describe('EditableProfileCard.cy.tsx', () => {
    it('component should exist', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
        <TestProvider options={{
          initialState: {
              user: {
                authData: {
                  id: '3'
                }
              }
            }
          }}
        >
          <EditableProfileCard id='3'/>
        </TestProvider>
      );
    });
});

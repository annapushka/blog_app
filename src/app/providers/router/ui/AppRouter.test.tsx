import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout } from '@/shared/const/router';

describe('app/router/AppRouter', () => {
    test('Page has to be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
});

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '../../i18n/i18nForTests';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,

}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}

import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18nForTests from '../../i18n/i18nForTests';

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18nForTests}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>

);

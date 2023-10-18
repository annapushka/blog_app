import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Counter } from '@/entities/Counter';
import { BugButton } from '@/app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная')}
            <Counter />
        </Page>
    );
};

export default MainPage;

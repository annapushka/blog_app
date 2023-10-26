import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная')}
        </Page>
    );
};

export default MainPage;

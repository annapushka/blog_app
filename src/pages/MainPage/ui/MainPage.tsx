import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { StarsRating } from '@/shared/ui/StarsRating/StarsRating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная')}
            <StarsRating size={50} />
        </Page>
    );
};

export default MainPage;

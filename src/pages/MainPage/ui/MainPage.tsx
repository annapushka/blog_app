import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { RaitingCard } from '@/entities/Raiting';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная')}
            <RaitingCard
                title={t('Как вам статья?')}
                feedbackTitle={t('Оставить отзыв')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;

import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/ErrorBoundary';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <BugButton />
      <Counter />
      {t('Главная')}
    </Page>
  );
};

export default MainPage;

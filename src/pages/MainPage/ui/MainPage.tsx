import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { toogleFeatures } from '@/shared/lib/features';

const CounterRedesigned = () => (
  <div style={{ color: 'red' }}>
    <Counter />
  </div>
);

const MainPage = () => {
  const { t } = useTranslation('main');

  const counter = toogleFeatures({
    name: 'isCounterEnabled',
    on: () => <Counter />,
    off: () => <CounterRedesigned />,
  });

  return (
    <Page data-testid="MainPage">
      <BugButton />
      {counter}
      {t('Главная')}
    </Page>
  );
};

export default MainPage;

import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';

const CounterRedesigned = () => (
  <div style={{ color: 'red' }}>
    <Counter />
  </div>
);

const MainPage = () => {
  const { t } = useTranslation('main');

  const counter = toggleFeatures({
    name: 'isCounterEnabled',
    on: () => <Counter />,
    off: () => <CounterRedesigned />,
  });

  return (
    <Page data-testid="MainPage">
      <VStack gap="16">
        <BugButton />
        {counter}
      </VStack>
    </Page>
  );
};

export default MainPage;

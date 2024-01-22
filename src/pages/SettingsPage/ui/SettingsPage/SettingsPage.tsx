import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';

const SettingsPage = memo(() => {
  const { t } = useTranslation('settings');

  return (
    <Page>
      <VStack gap="32">
        <Text title={t('Настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;

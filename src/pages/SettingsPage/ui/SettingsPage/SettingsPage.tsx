import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Page } from '@/widgets/Page';

const SettingsPage = memo(() => {
  const { t } = useTranslation('settings');

  return (
    <Page>
      <Text title={t('Настройки пользователя')} />
    </Page>
  );
});

export default SettingsPage;

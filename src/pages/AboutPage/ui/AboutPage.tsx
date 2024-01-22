import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text/Text';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid="AboutPage">
      <Text title={t('О сайте')} />
    </Page>
  );
};

export default AboutPage;

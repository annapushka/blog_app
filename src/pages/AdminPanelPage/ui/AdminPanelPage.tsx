import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('admin');
  return (
    <Page data-testid="AdminPanelPage">{t('Панель администратора')}</Page>
  );
};

export default AdminPanelPage;

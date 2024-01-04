import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/deprecated/Button/Button';

// component to test
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('Выдать ошибку')}</Button>;
};

export default BugButton;

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button from '@/shared/ui/Button/Button';
import ErrorIcon from '@/shared/assets/icons/error-icon.svg';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    document.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div className={cls.text}>
        {t('Произошла непредвиденная ошибка')}
        <ErrorIcon className={cls.icon} />
      </div>

      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export default PageError;

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import Button from '@/shared/ui/redesigned/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Button
          variant="clear"
          onClick={changeLanguage}
          className={className}
        >
          {t(short ? 'Сокращение' : 'Язык')}
        </Button>
      )}
      off={(
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          onClick={changeLanguage}
          className={className}
        >
          {t(short ? 'Сокращение' : 'Язык')}
        </ButtonDeprecated>
)}
    />

  );
});

export default LangSwitcher;

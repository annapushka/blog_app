import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UiDesignSwitcher.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags } from '@/shared/lib/features';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation('settings');
  const isAppRedesigned = getFeatureFlags('isAppRedesigned');
  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'new',
    },
  ];

  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <ListBox
      className={classNames(cls.UiDesignSwitcher, {}, [className])}
      value={isAppRedesigned ? 'new' : 'old'}
      items={items}
      onChange={onChange}
    />
  );
});

import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UiDesignSwitcher.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation('settings');
  const isAppRedesigned = getFeatureFlags('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(updateFeatureFlags({
        features: {
          isAppRedesigned: value === 'new',
        },
        userId: authData.id,
      })).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <HStack gap="8" max>
      <Text text={t('Вариант интерфейса')} />
      {isLoading
        ? <Skeleton width={200} height={34} border="34px" />
        : (
          <ListBox
            className={classNames(cls.UiDesignSwitcher, {}, [className])}
            value={isAppRedesigned ? 'new' : 'old'}
            items={items}
            onChange={onChange}
          />
        )}

    </HStack>

  );
});

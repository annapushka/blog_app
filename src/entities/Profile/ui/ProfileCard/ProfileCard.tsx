import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { ProfileCardDeprecated, ProfileCardDeprecatedSkeleton } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned, ProfileCardRedesignedSkeleton } from '../ProfileCardRedesigned/ProfileCardRedesigned';
import cls from './ProfileCard.module.scss';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    isLoading,
    error,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedSkeleton />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [
              className,
              cls.error,
            ])}
          >
            <TextDeprecated
              theme={TextTheme.ERROR}
              title={t('Произошла ошибка при загрузке профиля')}
              text={t('Попробуйте обновить странницу')}
              align={TextAlign.CENTER}
            />
          </HStack>
        )}
        off={(
          <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [
              className,
              cls.error,
            ])}
          >
            <Text
              variant="error"
              title={t('Произошла ошибка при загрузке профиля')}
              text={t('Попробуйте обновить странницу')}
              align={TextAlign.CENTER}
            />
          </HStack>
        )}
      />

    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
});

export default ProfileCard;

import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import cls from './ProfileCardRedesigned.module.scss';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import Skeleton from '@/shared/ui/redesigned/Avatar/Skeleton/Skeleton';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card className={cls.ProfileCardRedesigned} padding="24">
      <VStack gap="32" max>
        <HStack gap="16">
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </HStack>
        <HStack gap="16">
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    ...otherProps
  } = props;

  const { t } = useTranslation('profile');

  return (
    <Card
      className={classNames(cls.ProfileCardRedesigned, {}, [className])}
      padding="24"
      {...otherProps}
    >
      <VStack gap="32" max>
        {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} size={128} />
        </HStack>
        )}
        <HStack gap="24" max align="start">
          <VStack gap="16" max>
            <Input
              value={data?.first}
              label={t('Имя')}
              className={cls.input}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t('Фамилия')}
              className={cls.input}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Возраст')}
              className={cls.input}
              onChange={onChangeAge}
              readonly={readonly}
              type="number"
            />
            <Input
              value={data?.city}
              label={t('Город')}
              className={cls.input}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              value={data?.username}
              label={t('Имя пользователя')}
              className={cls.input}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Фото профиля')}
              className={cls.input}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              className={cls.input}
              label={t('Валюта')}
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              className={cls.input}
              label={t('Страна')}
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

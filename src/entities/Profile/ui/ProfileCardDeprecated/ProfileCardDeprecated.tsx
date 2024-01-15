import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Input } from '@/shared/ui/deprecated/Input/Input';
import cls from './ProfileCardDeprecated.module.scss';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import Loader from '@/shared/ui/deprecated/Loader/Loader';

export const ProfileCardDeprecatedSkeleton = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(
        cls.ProfileCard,
        { [cls.loading]: true },
        [],
      )}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
      {...otherProps}
    >
      {data?.avatar && (
      <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar src={data?.avatar} />
      </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        type="number"
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Фото профиля')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>

  );
};

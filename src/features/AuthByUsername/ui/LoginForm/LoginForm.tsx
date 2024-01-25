import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModulLoader } from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import Button from '@/shared/ui/redesigned/Button/Button';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
  // eslint-disable-next-line i18next/no-literal-string
    <DynamicModulLoader reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <VStack gap="32" className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} bold />
            <VStack gap="16" max>
              {error && (
              <Text
                text={t(
                  'Вы ввели неверный пароль или имя пользователя',
                )}
                variant="error"
              />
              )}
              <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите имя пользователя')}
                autofocus
                onChange={onChangeUsername}
                value={username}
              />
              <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
              />
            </VStack>
            <Button
              className={cls.loginBtn}
              variant="outline"
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        )}
        off={(
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated text={t('Форма авторизации')} />
            {error && (
            <TextDeprecated
              text={t(
                'Вы ввели неверный пароль или имя пользователя',
              )}
              theme={TextTheme.ERROR}
            />
            )}
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t('Введите имя пользователя')}
              autofocus
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t('Введите пароль')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              className={cls.loginBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        )}
      />
    </DynamicModulLoader>
  );
});

export default LoginForm;

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Button from '@/shared/ui/redesigned/Button/Button';
import { Card } from '@/shared/ui/redesigned/Card/Card';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: ProfilePageHeaderProps) => {
    const { className, ...otherProps } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setRedonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <Card padding="24" border="round" max>
            <HStack
              justify="between"
              max
              className={classNames('', {}, [className])}
              {...otherProps}
            >
              <Text title={t('Профиль')} />
              {canEdit && (
              <div>
                {readonly ? (
                  <Button
                    variant="outline"
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('Редактировать')}
                  </Button>
                ) : (
                  <HStack gap="8">
                    <Button
                      variant="outline"
                      onClick={onCancelEdit}
                      data-testid="EditableProfileCardHeader.CancelButton"
                      color="error"
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                      color="success"
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                )}
              </div>
              )}
            </HStack>
          </Card>
        )}
        off={(
          <HStack
            justify="between"
            max
            className={classNames('', {}, [className])}
            {...otherProps}
          >
            <TextDeprecated title={t('Профиль')} />
            {canEdit && (
            <div>
              {readonly ? (
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать')}
                </ButtonDeprecated>
              ) : (
                <HStack gap="8">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Отменить')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Сохранить')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </div>
            )}
          </HStack>
        )}
      />
    );
  },
);

export default EditableProfileCardHeader;

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModulLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddComentForm.module.scss';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { ToggleFeatures } from '@/shared/lib/features';
import Button from '@/shared/ui/redesigned/Button/Button';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { Card } from '@/shared/ui/redesigned/Card/Card';

export interface AddComentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddComentForm = memo((props: AddComentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('article');
  const disptach = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      disptach(addCommentFormActions.setText(value));
    },
    [disptach],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModulLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <Card padding="24" border="round" max>
            <HStack
              data-testid="AddCommentFrom"
              max
              gap="16"
              className={classNames(cls.AddComentFormRedesigned, {}, [className])}
            >
              <Input
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentTextChange}
                className={cls.input}
                data-testid="AddCommentForm.Input"
              />
              <Button
                variant="outline"
                onClick={onSendHandler}
                data-testid="AddCommentForm.Button"
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        )}
        off={(
          <HStack
            data-testid="AddCommentFrom"
            max
            className={classNames(cls.AddComentForm, {}, [className])}
          >
            <InputDeprecated
              placeholder={t('Введите текст комментария')}
              value={text}
              onChange={onCommentTextChange}
              className={cls.input}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={onSendHandler}
              data-testid="AddCommentForm.Button"
            >
              {t('Отправить')}
            </ButtonDeprecated>
          </HStack>
        )}
      />
    </DynamicModulLoader>
  );
});

export default AddComentForm;

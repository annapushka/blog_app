import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import Input from '@/shared/ui/Input/Input';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModulLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddComentForm.module.scss';

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
      <HStack
        data-testid="AddCommentFrom"
        max
        className={classNames(cls.AddComentForm, {}, [className])}
      >
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
          data-testid="AddCommentForm.Input"
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
          data-testid="AddCommentForm.Button"
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModulLoader>
  );
});

export default AddComentForm;

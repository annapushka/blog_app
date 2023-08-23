import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import cls from './AddComentForm.module.scss';

export interface AddComentFormProps {
    className?: string;

}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddComentForm = memo((props: AddComentFormProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const disptach = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        disptach(addCommentFormActions.setText(value));
    }, [disptach]);

    const onSendComment = useCallback(() => {
        disptach();
    }, [disptach]);

    return (
        <DynamicModulLoader reducers={reducers}>
            <div className={classNames(cls.AddComentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendComment}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModulLoader>

    );
});

export default AddComentForm;

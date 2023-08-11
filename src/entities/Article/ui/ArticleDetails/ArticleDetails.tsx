import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
    (props: ArticleDetailsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        // const isLoading = useSelector(getArticleDetailsIsLoading);
        const isLoading = true;
        const error = useSelector(getArticleDetailsError);
        const article = useSelector(getArticleDetailsData);

        useEffect(() => {
            dispatch(fetchArticleById(id));
        }, [dispatch, id]);

        let content;

        if (isLoading) {
            content = (
                <div className={cls.loading}>
                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.skeleton} width="100%" height={24} />
                    <Skeleton className={cls.skeleton} width="100%" height={300} />
                    <Skeleton className={cls.skeleton} width="100%" height={300} />
                </div>
            );
        } else if (error) {
            content = (
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                />
            );
        } else {
            content = (
                <div />
            );
        }

        return (
            <DynamicModulLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.ArticleDetails, {}, [className])}>
                    {content}
                </div>

            </DynamicModulLoader>
        );
    },
);

export default ArticleDetails;

import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
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

        useEffect(() => {
            dispatch(fetchArticleById(id));
        }, [dispatch, id]);

        return (
            <DynamicModulLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.ProfileCard, {}, [className])}>
                    111
                </div>
            </DynamicModulLoader>

        );
    },
);

export default ArticleDetails;

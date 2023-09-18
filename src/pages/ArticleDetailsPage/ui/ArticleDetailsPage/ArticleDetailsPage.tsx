import { ArticleDetails, ArticleList } from 'entities/Article';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import {
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCommentsByArticleById,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleById/fetchCommentsByArticleById';
import AddComentForm from 'features/AddCommentForm/ui/AddComentForm/AddComentForm';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleRecomendations } from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecomendations.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleById(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModulLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                {!recommendationsIsLoading && (
                    <>
                        <Text
                            className={cls.recommendationsTitle}
                            title={t('Рекомендуем')}
                        />
                        <ArticleList
                            articles={recommendations}
                            isLoading={recommendationsIsLoading}
                            className={cls.recommendations}
                            target="_blank"
                        />

                    </>
                )}
                {!isLoading && (
                    <>
                        <Text className={cls.commentTitle} title={t('Комментарии')} />
                        <AddComentForm onSendComment={onSendComment} />
                    </>
                )}
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModulLoader>
    );
};

export default memo(ArticleDetailsPage);

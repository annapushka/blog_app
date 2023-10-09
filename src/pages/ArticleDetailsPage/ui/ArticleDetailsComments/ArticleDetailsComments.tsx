import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import VStack from 'shared/ui/Stack/VStack/VStack';
import Text from 'shared/ui/Text/Text';
import { AddComentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleById } from '../../model/services/fetchCommentsByArticleById/fetchCommentsByArticleById';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleById(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {!isLoading && (
                <>
                    <Text title={t('Комментарии')} />
                    <AddComentForm onSendComment={onSendComment} />
                </>
            )}
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </VStack>
    );
});

export default ArticleDetailsComments;

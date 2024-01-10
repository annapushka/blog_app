import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AddComentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import VStack from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import Loader from '@/shared/ui/deprecated/Loader/Loader';
import { fetchCommentsByArticleById } from '../../model/services/fetchCommentsByArticleById/fetchCommentsByArticleById';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleById(id));
    });

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch],
    );
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <Text title={t('Комментарии')} />
        <Suspense fallback={<Loader />}>
          <AddComentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={isLoading} comments={comments} />
      </VStack>
    );
  },
);

export default ArticleDetailsComments;

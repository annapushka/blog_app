import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    console.log({ article: article?.id });

    if (article?.id) navigate(getRouteArticleEdit(article.id));
  }, [article?.id, navigate]);

  if (!article) {
    return null;
  }

  return (
    <Card
      padding="24"
      border="round"
      className={cls.card}
    >
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  );
});

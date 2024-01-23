import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { getCanEditArticle } from '../../model/selectors/article';
import {
  getRouteArticleEdit,
  getRouteArticles,
} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article?.id) navigate(getRouteArticleEdit(article.id));
    }, [article?.id, navigate]);

    return (
      <HStack
        max
        justify="between"
        className={classNames('', {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        {canEdit && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
        )}
      </HStack>
    );
  },
);

export default ArticleDetailsPageHeader;

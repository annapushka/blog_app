import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView } from '@/entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const onChangeView = useCallback(

    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );
  return (
    <ArticleViewSelector
      className={className}
      view={view}
      onViewClick={onChangeView}
    />

  );
});

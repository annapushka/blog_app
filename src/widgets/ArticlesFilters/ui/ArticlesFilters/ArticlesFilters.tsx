import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeType: (type: ArticleType) => void;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className, sort, order, type, onChangeType, search, onChangeSearch, onChangeSort, onChangeOrder,
  } = props;
  const { t } = useTranslation();

  return (
    <Card className={classNames(cls.ArticlesFilters, {}, [className])}>
      <VStack gap="32">
        <Input
          placeholder={t('Поиск')}
          className={cls.input}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
      </VStack>
    </Card>
  );
});

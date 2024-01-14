import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import Select, { SelectOption } from '@/shared/ui/deprecated/Select/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, sort, order, onChangeSort, onChangeOrder,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <VStack gap="8">
            <Text text={t('Сортировать ПО')} />
            <ListBox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
              className={cls.select}
            />
            <ListBox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
              className={cls.select}
            />
          </VStack>
        </div>
      )}
      off={(
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select
            options={sortFieldOptions}
            label={t('Сортировать ПО')}
            value={sort}
            onChange={onChangeSort}
            className={cls.select}
          />
          <Select
            options={orderOptions}
            label={t('по')}
            value={order}
            onChange={onChangeOrder}
            className={cls.select}
          />
        </div>
      )}
    />
  );
});

export default ArticleSortSelector;

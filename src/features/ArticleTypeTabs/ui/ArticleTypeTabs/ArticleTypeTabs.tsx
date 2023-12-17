import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import Tabs, { TabItem } from '@/shared/ui/Tabs/Tabs';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const typeTabs = useMemo<TabItem[]>(
    () => Object.keys(ArticleType).map((type: string) => ({
      value: type,
      content: type,
    })),
    [],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
    />
  );
});

export default ArticleTypeTabs;

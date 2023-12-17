import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import Card, { CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (value: TabItem) => void;
}

export const Tabs = memo(
  ({
    className, tabs, value, onTabClick,
  }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick],
    );

    return (
      <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            onClick={clickHandle(tab)}
            className={cls.tab}
            key={tab.value}
            theme={
                            tab.value === value
                              ? CardTheme.NORMAL
                              : CardTheme.OUTLINED
                        }
          >
            {tab.content}
          </Card>
        ))}
      </div>
    );
  },
);

export default Tabs;

import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import Flex, { FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (value: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo(
  ({
    className, tabs, value, onTabClick, direction = 'row',
  }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick],
    );

    return (
      <Flex
        direction={direction}
        gap="8"
        align="start"
        className={classNames(cls.Tabs, {}, [className])}
      >
        {tabs.map((tab) => {
          const isSelected = tab.value === value;
          return (
            <Card
              onClick={clickHandle(tab)}
              className={classNames(cls.tab, { [cls.selected]: isSelected }, [className])}
              key={tab.value}
              variant={isSelected ? 'light' : 'normal'}
              border="round"
            >
              {tab.content}
            </Card>
          );
        })}
      </Flex>
    );
  },
);

export default Tabs;

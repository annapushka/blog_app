import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolBar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollToolBarProps {
    className?: string;
}

export const ScrollToolBar = memo((props: ScrollToolBarProps) => {
  const { className } = props;

  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classNames(cls.ScrollToolBar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});

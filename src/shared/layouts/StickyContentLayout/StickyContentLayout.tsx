import { ReactElement, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    right?: ReactElement;
    content?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
  const {
    className, content, left, right,
  } = props;
  return (
    <div className={classNames(cls.StickyContentLayout, {}, [className])}>
      {left && <div className={cls.right}>{right}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.left}>{left}</div>}
    </div>
  );
});

import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

/**
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, height, width, border,
  } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  );
});

import { HTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    padding = '8',
    ...otherProps
  } = props;

  const mapPaddingToClass: Record<CardPadding, string> = {
    0: cls.padding0,
    8: cls.padding8,
    16: cls.padding16,
    24: cls.padding24,
  };
  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[variant], paddingClass])}
      {...otherProps}
    >
      {children}
    </div>
  );
});

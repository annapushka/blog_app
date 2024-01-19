import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 's' | 'm' | 'l';

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l',
};

const mapSizeHeader: Record<TextSize, HeaderTag> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
    bold?: boolean;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    'data-testid': dataTestid = 'Text',
    bold,
  } = props;

  const HeaderTag = mapSizeHeader[size];
  const sizeClass = mapSizeToClass[size];

  return (
    <div className={classNames(cls.Text, { [cls.bold]: bold }, [className, cls[variant], cls[align], cls[sizeClass]])}>
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestid}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestid}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});

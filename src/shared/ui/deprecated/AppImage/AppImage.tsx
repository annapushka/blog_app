import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

/**
 * @deprecated
 */
export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (error && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      className={classNames('', {}, [className])}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
});

export default AppImage;

import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AppImage from '../../redesigned/AppImage/AppImage';
import UseIcon from '@/shared/assets/icons/user.svg';
import { Icon } from '../Icon/Icon';
import Skeleton from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

/**
 * @deprecated
 */
export const Avatar = ({
  className,
  src,
  size = 100,
  alt,
  fallbackInverted,
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
    }),
    [size],
  );

  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UseIcon}
      className={cls.img}
    />
  );
  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <div className={classNames(cls.Avatar, {}, [className])} style={style}>
      <AppImage
        fallback={fallback}
        errorFallback={errorFallback}
        src={src}
        alt={alt}
        className={cls.img}
      />
    </div>
  );
};

export default Avatar;

import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    }), [size]);

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={style}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className={cls.img}
                />
            ) : (<div className={cls.img} />)}
        </div>

    );
};

export default Avatar;

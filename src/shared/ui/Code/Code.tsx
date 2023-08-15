import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import Button, { ButtonTheme } from '../Button/Button';
import Icon from '../Icon/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});

export default Code;

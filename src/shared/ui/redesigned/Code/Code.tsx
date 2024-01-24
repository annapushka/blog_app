import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIconDeprecated from '@/shared/assets/icons/copy.svg';
import CopyIcon from '@/shared/assets/icons/copiIcon.svg';
import cls from './Code.module.scss';
import { Button as ButtonDeprecated, ButtonTheme } from '../../deprecated/Button/Button';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            Svg={CopyIcon}
            className={cls.copyBtn}
            clickable
            onClick={onCopy}
          />
          <code>{text}</code>
        </pre>
)}
      off={(
        <pre className={classNames(cls.Code, {}, [className])}>
          <ButtonDeprecated
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
            onClick={onCopy}
          >
            <IconDeprecated Svg={CopyIconDeprecated} className={cls.copyIcon} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
)}
    />

  );
});

export default Code;

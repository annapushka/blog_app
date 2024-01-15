import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import HStack from '../Stack/HStack/HStack';
import { Text } from '../Text/Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    autofocus?: boolean;
    label?: string;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    addonLeft,
    addonRight,
    autofocus,
    label,
    size = 'm',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.editing]: !readonly,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
    [cls.focused]: isFocused,
  };

  return (
    <HStack max gap="8">
      <Text text={`${label}:`} />
      <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
        <div className={cls.addonLeft}>
          {addonLeft}
        </div>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          placeholder={placeholder}
          readOnly={readonly}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          {...otherProps}
        />
        <div className={cls.addonRight}>
          {addonRight}
        </div>
      </div>
    </HStack>
  );
});

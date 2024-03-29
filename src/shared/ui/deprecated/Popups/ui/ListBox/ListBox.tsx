import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import HStack from '../../../../redesigned/Stack/HStack/HStack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

/**
 * @deprecated
 */
export function ListBox({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom right',
  label,
}: ListBoxProps) {
  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HStack gap="8">
      {label && <span>{`${label}:`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [
          className,
          popupCls.popup,
        ])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={popupCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.selected]: selected,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}

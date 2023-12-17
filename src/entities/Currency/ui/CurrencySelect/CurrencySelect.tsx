import { memo, useCallback, useMemo } from 'react';

import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;

  const currencyOptions = useMemo(
    () => Object.entries(Currency).map((val) => ({
      value: val[0],
      content: val[1],
    })),
    [],
  );

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      value={value}
      items={currencyOptions}
      defaultValue={Currency.RUB}
      className={className}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top left"
    />
  );
});

export default CurrencySelect;

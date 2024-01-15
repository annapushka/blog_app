import { memo, useCallback, useMemo } from 'react';

import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    label?: string;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readonly, label,
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <ListBox
          value={value}
          items={currencyOptions}
          defaultValue={Currency.RUB}
          className={className}
          onChange={onChangeHandler}
          readonly={readonly}
          direction="top left"
          label={label}
        />
      )}
      off={(
        <ListBoxDeprecated
          value={value}
          items={currencyOptions}
          defaultValue={Currency.RUB}
          className={className}
          onChange={onChangeHandler}
          readonly={readonly}
          direction="top left"
        />
      )}
    />
  );
});

export default CurrencySelect;

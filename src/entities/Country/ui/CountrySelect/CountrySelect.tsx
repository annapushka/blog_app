import { memo, useCallback, useMemo } from 'react';

import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
    label?: string;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly, label,
  } = props;

  const countryOptions = useMemo(
    () => Object.entries(Country).map((val) => ({
      value: val[0],
      content: val[1],
    })),
    [],
  );

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <ListBox
          value={value}
          items={countryOptions}
          defaultValue={Country.Russia}
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
          items={countryOptions}
          defaultValue={Country.Russia}
          className={className}
          onChange={onChangeHandler}
          readonly={readonly}
          direction="top left"
        />
    )}
    />
  );
});

export default CountrySelect;

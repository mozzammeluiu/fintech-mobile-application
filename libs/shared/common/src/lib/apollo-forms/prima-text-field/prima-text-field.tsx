/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { PrimaTextInput } from './prima-text-input/prima-text-input';
import { primaTextFieldProps } from './type';

export const PrimaTextField = ({
  control,
  defaultValue,
  name,
  rules,
  ...restProps
}: primaTextFieldProps) => {
  console.log({ defaultValue });
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <PrimaTextInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...restProps}
          />
        )}
        name={name}
        defaultValue={defaultValue || undefined}
        rules={rules}
        {...restProps}
      />
    </View>
  );
};

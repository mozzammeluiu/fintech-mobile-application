import { forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';
import { primaTextInputProps } from '../type';

export const PrimaTextInput = forwardRef<RNTextInput, primaTextInputProps>(
  (
    {
      onChangeText,
      onChange,
      value,
      output,
      input,
      defaultValue,
      mode = 'outlined',
      label = '',
      ...restProps
    }: primaTextInputProps,
    ref
  ) => {
    return (
      <TextInput
        label={label}
        mode={mode}
        onChangeText={(event) => onChange(output ? output(event) : event)}
        value={input ? input(value) : value}
        ref={ref}
        {...restProps}
      />
    );
  }
);

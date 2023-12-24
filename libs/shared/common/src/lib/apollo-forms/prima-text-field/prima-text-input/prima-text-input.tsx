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
      ...restProps
    }: primaTextInputProps,
    ref
  ) => {
    console.log('value', value);
    return (
      <TextInput
        label="Email"
        mode="outlined"
        onChangeText={(event) => onChange(output ? output(event) : event)}
        value={input !== undefined ? input(value) : value}
        ref={ref}
        {...restProps}
      />
    );
  }
);

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { PrimaTextInput } from './prima-text-input/prima-text-input';
import { primaTextFieldProps } from './type';

export const PrimaTextField = ({
  control,
  defaultValue,
  name,
  rules,
  id,
  value,
  message,
  error,
  style,
  ...restProps
}: primaTextFieldProps) => {
  const messageId = `${id}-message`;
  console.log(error, message, 'error message');

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value, ref, ...field } }) => {
          return (
            <View style={style}>
              <PrimaTextInput
                id={id}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                {...field}
                {...restProps}
              />
              {error && (
                <Text testID={messageId} style={{ color: 'red', marginTop: 4 }}>
                  {message}
                </Text>
              )}
            </View>
          );
        }}
        name={name}
        defaultValue={defaultValue || undefined}
        rules={rules}
        {...restProps}
      />
    </View>
  );
};

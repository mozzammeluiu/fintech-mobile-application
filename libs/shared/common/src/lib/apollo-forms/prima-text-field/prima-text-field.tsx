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
  // secureTextEntry = false,
  ...restProps
}: primaTextFieldProps) => {
  const messageId = `${id}-message`;

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
                value={value || defaultValue}
                ref={ref}
                // secureTextEntry={secureTextEntry}
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
        rules={rules}
        {...restProps}
      />
    </View>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */

// export type PrimaTextInputProps = RNTextInputProps & {
//   backgroundColor?: string;
// };

import { ChangeEvent, ReactNode } from 'react';
import { Control, FieldValues, RegisterOptions } from 'react-hook-form';
import { TextInput as RNTextInput, TextInputProps } from 'react-native-paper';
type RNTextInputProps = React.ComponentProps<typeof RNTextInput>;
export type pickTextFieldProps = Pick<
  TextInputProps,
  | 'id'
  | 'mode'
  | 'left'
  | 'right'
  | 'disabled'
  | 'label'
  | 'placeholder'
  | 'error'
  | 'onChangeText'
  | 'selectionColor'
  | 'cursorColor'
  | 'activeUnderlineColor'
  | 'outlineColor'
  | 'activeOutlineColor'
  | 'textColor'
  | 'dense'
  | 'multiline'
  | 'numberOfLines'
  | 'onFocus'
  | 'onBlur'
  | 'render'
  // | 'value'
  | 'theme'
  | 'testID'
  | 'contentStyle'
  | 'outlineStyle'
  | 'underlineStyle'
> &
  RNTextInputProps;

export interface primaFormCommonFieldProps<
  TFieldValues extends FieldValues = FieldValues
> {
  /**
   * this property is for helper and error message of the field
   */
  message?: ReactNode;
  /**
   * this for the react hook control
   */
  control: Control<TFieldValues>;
  /**
   * this for the validation rules of the field
   */
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  /**
   * this for the transforming value of the input field
   */
  input?: (value: any) => any;
  /**
   * this for the transforming value of the out put
   */
  output?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | number
  ) => any;
}

// export interface primaTextProps extends pickTextFieldProps {}

// export interface primaTextInputProps extends primaTextProps,primaFormCommonFieldProps {}

// export interface primaTextFieldProps extends Partial<primaTextInputProps>{}

export interface primaTextProps extends pickTextFieldProps {}
export interface primaTextInputProps
  extends primaTextProps,
    Omit<primaFormCommonFieldProps, 'control'> {
  value?: any;
  defaultValue?: any;
  onChange: (event: any) => void;
}
// export type primaTextFieldProps = Omit<
//   primaTextInputProps,
//   'onFocus' | 'render'
// >{

// };

export interface primaTextFieldProps
  extends primaFormCommonFieldProps,
    Omit<primaTextProps, 'render'> {
  name: string;
  value?: any;
  defaultValue?: any;
}

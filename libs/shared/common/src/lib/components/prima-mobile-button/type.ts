import { Button as RNButton, ButtonProps } from 'react-native-paper';
type RNbuttonProps = React.ComponentProps<typeof RNButton>;
export type pickButtonProps = Pick<
  ButtonProps,
  | 'id'
  | 'mode'
  | 'dark'
  | 'color'
  | 'buttonColor'
  | 'textColor'
  | 'rippleColor'
  | 'loading'
  | 'icon'
  | 'disabled'
  | 'uppercase'
  | 'accessibilityLabel'
> &
  RNbuttonProps;

export interface primaMobileButtonProps extends pickButtonProps {}

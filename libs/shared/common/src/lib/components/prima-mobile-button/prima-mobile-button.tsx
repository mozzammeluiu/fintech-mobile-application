import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { primaMobileButtonProps } from './type';
export const PrimaMobileButton = ({
  children,
  style,
  ...restProps
}: primaMobileButtonProps) => {
  return (
    <Button style={[styles.container, style]} {...restProps}>
      {children}
    </Button>
  );
};
const styles = StyleSheet.create({
  container: {},
});

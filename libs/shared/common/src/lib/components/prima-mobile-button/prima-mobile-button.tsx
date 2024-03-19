import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { primaMobileButtonProps } from './type';
export const PrimaMobileButton = ({
  children,
  ...restProps
}: primaMobileButtonProps) => {
  return <Button {...restProps}>{children}</Button>;
};
const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: '#45bc98' },
});

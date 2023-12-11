import { StyleSheet, Text, View } from 'react-native';
import { primaMobileHeadingProps } from './type';

export const PrimaMobileHeading = (props: primaMobileHeadingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: '#45bc98' },
});

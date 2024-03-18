import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
const HomeScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      backgroundColor: '#F8FAFF',
      padding: 30,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  });
  return (
    <View style={styles.container}>
     <Text>Hello World! Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';




const ListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text>Hello World! List Screen</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  item: {
    display: 'flex',
    flexDirection:'row',
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#FFF',
    height: 60,
    width: 325,
  },
  title: {
    fontSize: 10
  }
});

export default ListScreen;

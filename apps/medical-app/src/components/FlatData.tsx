import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import assets from '../assets';

const DATA = [
  {
    id: '1',
    title: 'Quick Help'
  },
  {
    id: '2',
    title: 'Hospital'
  },
  {
    id: '3',
    title: 'Ambulance'
  },
  {
    id: '4',
    title: 'Doctors'
  },
  {
    id: '5',
    title: 'Nurses'
  }
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={[styles.item, {marginTop:20}]}>
    <Image
      style={{ width: 65, height: 48, alignSelf: 'center', marginTop: 8 }}
      source={assets.profileImage}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatData = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
display:'flex',
marginTop: 10,
  },
  item: {
    alignSelf: 'center',
    borderRadius: 24,
    backgroundColor: '#54C1FB',
    height: 99,
    width: 99,
    marginRight: 4
  },
  title: {
    textAlign: 'center',
    fontSize: 10
  }
});

export default FlatData;

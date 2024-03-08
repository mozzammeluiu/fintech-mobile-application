import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native';
import assets from '../assets';

const DATA = [
  {
    id: '1',
    title: 'Acarbose',
    time: '9.30 AM',
    week:'Every day'
  },
  {
    id: '2',
    title: 'Benefix',
    time: '10.30 AM',
    week:'Every day'
  },
  {
    id: '3',
    title: 'Calcium Chloride',
    time: '1.00 PM',
    week:'Every week'
  },
  {
    id: '4',
    title: 'Fabrazyme',
    time: '1.30 AM',
    week:'Every week'
  },
  {
    id: '5',
    title: 'Ketoprofen',
    time: '9.30 AM',
    week:'Every day'

  }
];

type ItemProps = { title: string, time: string, week: string };

const Item = ({ title, time, week }: ItemProps) => (
  <View style={[styles.item, { marginTop: 20 }]}>
    <View style={{height:60,width: 60, backgroundColor:'#813DF1', borderTopLeftRadius:15, borderBottomLeftRadius: 15}}>
    <Image
      style={{ width: 44, height: 16, alignSelf: 'center', marginTop: 24 }}
      source={assets.pillImage}
    />
    </View>
    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 16}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start'}}>
        <Text style={[{marginTop: 10, fontSize: 14}]}>{title}</Text>
        <Text style={[styles.title, {marginTop: 14, opacity: 0.4, marginLeft: 4}]}>50mg</Text>
        </View>
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: 10
        }}
      >
        <Text style={[{ marginTop: 10, fontSize: 10 }]}>{time}</Text>
        <Text
          style={[styles.title, { marginTop: 10, opacity: 0.4, marginLeft:10}]}
        >
         {week}
        </Text>
      </View>
    </View>
  </View>
);

const ListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 24, color: '#013', fontWeight: "500"}}>Today</Text>
        <Text style={{fontSize: 16, color: '#013', fontWeight: "500"}}>Thu, 21 Jan</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} time={item.time} week={item.week} />}
        keyExtractor={(item) => item.id}
      />
       <View style={{margin: 20}}>
      <Button
        title="Go back to Screen 1"
        onPress={() => navigation.goBack()}
      />
    </View>
    </SafeAreaView>
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

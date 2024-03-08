/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button
} from 'react-native';
import assets from '../assets';
import FindSection from '../components/FindSection';
import FlatData from '../components/FlatData';
const HomeScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      backgroundColor: '#F8FAFF',
      padding: 30,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      display: 'flex',
      flexDirection: 'column'
    },
    text1: {
      color: '#013',
      fontSize: 12,
      fontWeight: '400'
    },
    text2: {
      color: '#013',
      fontSize: 28,
      fontWeight: '500'
    },
    profileImageBackground: {
      height: 50,
      width: 50,
      borderRadius: 11,
      backgroundColor: '#d2d2d2'
    },
    topDoctors: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    doctorText: {
      fontSize: 18,
      color: '#013',
      fontWeight: '500'
    },
    seeAll: {
      fontSize: 12,
      color: '#54C1FB',
      fontWeight: '400'
    },
    topDoctorBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 25,
      width: 325,
      height: 173,
      borderRadius: 24
      //   borderColor: '#141414',
      //   borderWidth: 1
      //   backgroundColor: '#141414'
    },
    appointment: {
      display: 'flex',
      flexDirection: 'column'
    },
    designation: {
      color: '#FB9A54',
      fontSize: 10,
      marginTop: 30,
      marginLeft: -70,
      marginBottom: 8
    },
    name: {
      color: '#013',
      fontSize: 16,
      marginLeft: -70
    },
    time: {
      color: '#013',
      fontSize: 12,
      marginLeft: -70
    },
    button: {
      marginTop: 10,
      marginLeft: -40,
      backgroundColor: ''
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.text}>
          <Text style={styles.text1}>👋 Good Morning!</Text>
          <Text style={styles.text2}>Alexandar</Text>
        </View>
        <View style={styles.profileImageBackground}>
          <Image
            style={{ width: 40, height: 40, alignSelf: 'center', marginTop: 4 }}
            source={assets.profileImage}
          />
        </View>
      </View>
      <View>
        <FindSection />
      </View>
      <View>
        <FlatData />
      </View>
      <View>
        <View style={styles.topDoctors}>
          <Text style={styles.doctorText}>Top Doctors</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
      </View>
      <View style={styles.topDoctorBox}>
        <Image
          style={{ width: 210, height: 160, marginTop: 10 }}
          source={assets.nurseImage}
        />
        <View style={styles.appointment}>
          <Text style={styles.designation}>CARDIOLOGIST</Text>
          <Text style={styles.name}>Dr. Maria Watson</Text>
          <Text style={styles.time}>10.00 AM - 12.00 PM</Text>
          <View style={styles.button}>
            <Button title="Get Appointment" color="#518CFF"></Button>
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Button
          title="Go to Reminder Screen"
          onPress={() => navigation.navigate('ListScreen')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

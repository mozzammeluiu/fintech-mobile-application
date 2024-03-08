/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import assets from '../assets';
import { useForm } from 'react-hook-form';
import { PrimaTextField } from '@fintech/shared/common/apollo-forms';
const FindSection = () => {
  const {
    control,
    formState: { errors }
  } = useForm();
  const styles = StyleSheet.create({
    container: {
      //   backgroundColor: '#F8FAFF',
      //   padding: 30,
      display: 'flex',
      justifyContent: 'center'
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
      width: 150,
      marginTop: 60,
      color: '#013',
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 29.176
    },
    text2: {
      color: '#013',
      fontSize: 28,
      fontWeight: '500'
    },
    profileImageBackground: {},
    search: {
      marginTop: -10
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.text}>
          <Text style={styles.text1}>Lets Find your Specialist</Text>
          {/* <Text style={styles.text2}>Alexandar</Text> */}
        </View>
        <View style={styles.profileImageBackground}>
          <Image
            style={{ width: 216, height: 216, marginLeft: 0, marginTop: -20 }}
            source={assets.doctorImage}
          />
        </View>
      </View>
      <View style={styles.search}>
        <PrimaTextField
          outlineStyle={{ borderRadius: 16 }}
          id="search"
          testID="search"
          name="search"
          label="Search"
          placeholder="Type Here"
          control={control}
          error={!!errors?.search}
          // message={errors?.username?.message}
          rules={{
            required: true
          }}
        />
      </View>
    </View>
  );
};

export default FindSection;

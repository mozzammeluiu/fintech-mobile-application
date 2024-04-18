import { PrimaTextField } from '@fintech/shared/common/apollo-forms';
import {
  PrimaMobileButton,
  PrimaMobileHeading,
} from '@fintech/shared/common/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';

export const HomeScreen = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <PrimaMobileHeading text="Welcome Brio 👋" />
      {/* <View style={{ borderRadius: 999 }}> */}
      <FastImage
        style={{ width: 100, height: 100, borderRadius: 999 }}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          // headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* </View> */}
      <View style={{ width: '100%', marginHorizontal: 20 }}>
        <PrimaTextField
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          style={{ margin: 10 }}
          outlineStyle={{ borderRadius: 16, borderColor: '#d5d5d5' }}
          id="username"
          testID="username"
          name="username"
          label={
            <Text style={{ color: theme.colors.secondary }}>Username</Text>
          }
          // defaultValue={'mozzammel'}
          placeholder="Type Here"
          control={control}
          error={!!errors?.username}
          message={errors?.username?.message}
          rules={{
            required: {
              value: true,
              message: 'User name field is required',
            },
          }}
        />
        <PrimaTextField
          style={{ margin: 10 }}
          outlineStyle={{ borderRadius: 16, borderColor: '#d5d5d5' }}
          id="password"
          testID="password"
          name="password"
          label={
            <Text style={{ color: theme.colors.secondary }}>Password</Text>
          }
          placeholder="Type Here"
          secureTextEntry
          returnKeyType="done"
          keyboardType="phone-pad"
          control={control}
          error={!!errors?.password}
          message={errors?.password?.message}
          rules={{
            required: {
              value: true,
              message: 'Password field is required',
            },
          }}
        />

        <PrimaMobileButton
          style={{ margin: 10, borderRadius: 6 }}
          children={'Submit'}
          onPress={handleSubmit(onSubmit)}
          textColor="#fff"
          buttonColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

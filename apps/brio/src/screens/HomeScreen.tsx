import { PrimaTextField } from '@fintech/shared/common/apollo-forms';
import {
  PrimaMobileButton,
  PrimaMobileHeading,
} from '@fintech/shared/common/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

export const HomeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <View style={styles.container}>
      <PrimaMobileHeading text="Welcome Brio 👋" />
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
          label="Username"
          defaultValue={'mozzammel'}
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
          label="Password"
          placeholder="Type Here"
          secureTextEntry={true}
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

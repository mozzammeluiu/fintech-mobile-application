import { PrimaTextField } from '@fintech/shared/common/apollo-forms';
import { PrimaMobileHeading } from '@fintech/shared/common/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, SafeAreaView, View } from 'react-native';

export const HomeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PrimaMobileHeading text="Welcome Brio 👋" />
      <View style={{ width: '100%' }}>
        <PrimaTextField
          style={{ margin: 10 }}
          outlineStyle={{ borderRadius: 16, borderColor: '#d5d5d5' }}
          id="username"
          testID="username"
          name="username"
          label="Username"
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
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default HomeScreen;

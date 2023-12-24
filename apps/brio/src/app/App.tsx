import { PrimaTextField } from '@fintech/shared/common/apollo-forms';
import { PrimaMobileHeading } from '@fintech/shared/common/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, SafeAreaView } from 'react-native';

export const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <SafeAreaView>
      <PrimaMobileHeading text="Welcome Brio 👋" />
      <PrimaTextField
        id="username"
        testID="username"
        name="username"
        label="Username"
        placeholder="Type Here"
        control={control}
        error={!!errors?.username}
        // message={errors?.username?.message}
        rules={{
          required: true,
        }}
      />
      <PrimaTextField
        id="password"
        testID="password"
        name="password"
        label="Password"
        placeholder="Type Here"
        secureTextEntry
        returnKeyType="done"
        // right={
        //   <TextInput.Icon
        //     icon="eye"
        //     // onPress={() => setHidePass(!hidePass)}
        //   />
        // }
        keyboardType="phone-pad"
        control={control}
        rules={{
          required: true,
        }}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default App;

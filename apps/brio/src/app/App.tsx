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
  console.log({ errors });
  return (
    <SafeAreaView>
      <PrimaMobileHeading text="Welcome Brio 👋" />
      <PrimaTextField
        control={control}
        // defaultValue={'mozzammel'}
        name={'test'}
        rules={{
          required: true,
        }}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default App;

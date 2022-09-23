import React, {FC} from 'react';
import {View} from 'react-native';
import CustomText from './Components/text';

const LoginSuccess = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomText
        value={'Logged in Succesfully!!'}
        customStyle={{textAlign: 'center', fontSize: 30}}
      />
    </View>
  );
};

export default LoginSuccess;

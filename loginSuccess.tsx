import React, {FC} from 'react';
import {Alert, View} from 'react-native';
import CustomText from './Components/text';
import CustomButton from './Components/button';
import auth from '@react-native-firebase/auth';

const LoginSuccess = ({navigation}: any) => {
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        Alert.alert('Signed out!');
        navigation.navigate('login');
      });
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomText
        value={'Logged in Succesfully!!'}
        customStyle={{textAlign: 'center', fontSize: 30}}
      />
      <CustomButton
        name="Logout!"
        onPress={() => {
          handleLogout();
        }}
        customStyle={{marginTop: 25, width: '80%'}}
      />
    </View>
  );
};

export default LoginSuccess;

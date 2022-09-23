import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import CustomTextInput from './Components/textInput';
import CustomText from './Components/text';
import CustomButton from './Components/button';
import auth from '@react-native-firebase/auth';
import CustomPasswordInput from './Components/passwordInput';

const Login: FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (email.length == 0 || password.length == 0)
      Alert.alert('Please enter your credentials');
    else {
      auth()
        .signInWithEmailAndPassword(`${email}`, `${password}`)
        .then(() => {
          navigation.navigate('loginsuccess');
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          Alert.alert('Wrong credentials!');
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        value={'Welcome! Log In'}
        customStyle={{marginTop: 10, fontSize: 30}}
      />
      <CustomTextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <CustomPasswordInput
        placeholder="Enter Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <CustomButton
        name="Login"
        onPress={() => {
          handleLogin();
        }}
        customStyle={{marginTop: 5}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <CustomText
          value="New User? Signup"
          customStyle={{
            marginTop: 10,
            textDecorationLine: 'underline',
            color: '#2994FF',
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '10%',
  },
});

export default Login;

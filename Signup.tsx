import React, {FC, useState} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import CustomTextInput from './Components/textInput';
import CustomText from './Components/text';
import CustomButton from './Components/button';
import CustomPasswordInput from './Components/passwordInput';
import auth from '@react-native-firebase/auth';

const Signup: FC = ({navigation}: any) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    if (email.length == 0 || password.length == 0 || name.length == 0)
      Alert.alert('Please enter your credentials');
    auth()
      .createUserWithEmailAndPassword(`${email}`, `${password}`)
      .then(() => {
        Alert.alert('Signup success!');
        navigation.navigate('login');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        value={'Signup'}
        customStyle={{marginTop: 10, fontSize: 30}}
      />
      <CustomTextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)}
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
        name="Signup"
        onPress={() => {
          handleSignup();
        }}
        customStyle={{marginTop: 5}}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomText
          value="Already a User? Login"
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

export default Signup;

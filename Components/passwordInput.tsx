import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const CustomPasswordInput: FC<Props> = props => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={styles.textInput}
        autoCapitalize="none"
        value={props.value}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 2,
    height: 40,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
});

export default CustomPasswordInput;

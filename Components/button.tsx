import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  name: string;
  onPress: (event: any) => void;
  customStyle: {};
}

const CustomButton: FC<Props> = props => {
  return (
    <TouchableOpacity
      style={[styles.button, {...props.customStyle}]}
      onPress={props.onPress}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2994FF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: '4%',
    borderRadius: 5,
  },
  btnText: {color: '#fff', fontWeight: 'bold', fontSize: 20},
});

export default CustomButton;

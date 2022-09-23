import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  value: string;
  customStyle: {};
}

const CustomText: FC<Props> = props => {
  return (
    <Text style={[styles.text, {...props.customStyle}]}>{props.value}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomText;

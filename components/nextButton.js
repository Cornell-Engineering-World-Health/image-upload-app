import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function NextButton({ navigation, txt, next, params }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => navigation.navigate(next, params)}
    >
      <Text style={style.buttonText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0F2B64',
    padding: '6%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
});

export default NextButton;

import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native';
/** Forgot button
 *  - Leads to Reset Password Screen
 */
function ForgotButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Forgot')}
      style={style.button}
    >
      <Text>Forgot Password?</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    padding: '5%',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#FAFAFA',
  },
});

export default ForgotButton;

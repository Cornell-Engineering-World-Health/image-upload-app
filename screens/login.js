import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Login Screen
 *  Design (fimga login-1):
 * - text input for username and password
 * - google login option
 * - Login button that navigates to Home Screen
 * Requires: authentication before navigating to home screen
 */
function LoginScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text>Login</Text>
      <NextButton navigation={navigation} txt="Go to Home" next="Home" />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default LoginScreen
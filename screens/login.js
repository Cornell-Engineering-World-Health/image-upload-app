import * as React from 'react';
import { Button, View, Text } from 'react-native';

/** Login Screen
 *  Design (fimga login-1):
 * - text input for username and password
 * - google login option
 * - Login button that navigates to Home Screen
 * Requires: authentication before navigating to home screen
 */
function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default LoginScreen
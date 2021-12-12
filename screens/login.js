import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import LoginButton from '../components/loginButton';
import Title from '../components/title';
import ForgotButton from '../components/forgotButton';
/** Login Screen
 *  Design (fimga login-1):
 * - text input for username and password
 * - google login option
 * - Login button that navigates to Home Screen
 * Requires: authentication before navigating to home screen
 */
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.view}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.screen}>
          <Title>Login</Title>
          <Text style={style.username}>Username</Text>
          <TextInput
            placeholder="Username"
            style={style.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={style.password}>Password</Text>
          <TextInput
            placeholder="Password"
            style={style.textInput}
            autoCompleteType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <LoginButton
            navigation={navigation}
            email={email}
            password={password}
          />
          <ForgotButton navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: '5%',
  },
  username: {
    fontSize: 25,
    marginTop: '5%',
    marginBottom: '2%',
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  password: {
    fontSize: 25,
    marginBottom: '2%',
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  textInput: {
    height: Dimensions.get('window').height / 15,
    borderColor: '#098CDC',
    borderWidth: 2.5,
    borderRadius: 10,
    marginBottom: '5%',
    alignSelf: 'stretch',
    paddingHorizontal: '3%',
  },
});

export default LoginScreen;

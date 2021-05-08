import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import NextButton from "../components/nextButton";
import Title from "../components/title";

/** Login Screen
 *  Design (fimga login-1):
 * - text input for username and password
 * - google login option
 * - Login button that navigates to Home Screen
 * Requires: authentication before navigating to home screen
 */
function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.container}>
          <Title style={style.title} size={40} align="left">
            Login
          </Title>
          <Text style={style.username}>Username</Text>
          <TextInput
            placeholder="Username"
            style={style.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={style.password}>Password</Text>
          <TextInput
            placeholder="Password"
            style={style.textInput}
            autoCompleteType="password"
            secureTextEntry={true}
          />
          <NextButton navigation={navigation} txt="LOGIN" next="Home" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  username: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "stretch",
    textAlign: "left",
    marginHorizontal: 20,
  },
  password: {
    fontSize: 25,
    marginBottom: 10,
    alignSelf: "stretch",
    textAlign: "left",
    marginHorizontal: 20,
  },
  textInput: {
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 30,
    marginHorizontal: 20,
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default LoginScreen;

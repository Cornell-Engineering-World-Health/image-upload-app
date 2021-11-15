import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import NextButton from "../components/nextButton";
import ForgotButton from "../components/forgotButton";
import Title from "../components/title";

/** PreLogin Screen*/
function PreLoginScreen({ navigation }) {
  return (
    <View style={style.screen}>
      <Title size={50} align="center">
        AuroImage
      </Title>
      <Text style={style.text}>
        By uploading images through AuroImage you are helping us
        develop a unique device to assist blind and visually impaired
        individuals.
      </Text>
      <NextButton navigation={navigation} txt="LOGIN" next="Login" />
      <ForgotButton navigation={navigation} />
    </View>

  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#D8EDFA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    marginBottom: 50,
  },
});

export default PreLoginScreen;

import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import NextButton from "../components/nextButton";
import Title from "../components/title";

/** PreLogin Screen*/
function PreLoginScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Title size={50} align="center">
        APP NAME
      </Title>
      <Text style={style.text}>
        thematic statement or vision goes here, 1-2 sentences max. Hitting at
        core, mission, vision, or purpose of this app.
      </Text>
      <NextButton navigation={navigation} txt="LOGIN" next="Login" />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 20,
  },
});

export default PreLoginScreen;

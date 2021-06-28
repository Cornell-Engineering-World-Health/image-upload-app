import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingsButton from "../components/settingsButton";
import Title from "../components/title";

/** Title text with style. */
function Header({ navigation, screenName }) {
  return (
    <View style={style.headerContainer}>
      <Title size={40} align="left">
        {screenName}
      </Title>
      <SettingsButton navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Header;

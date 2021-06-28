import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Title from "../components/title";
import { Button } from 'react-native-elements';
import NextButton from "../components/nextButton"


function SettingsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Title>
        Settings
      </Title>
      <NextButton navigation={navigation} txt="ABOUT" next="About" />
      <NextButton navigation={navigation} txt="HELP & SUPPORT" next="Help" />
      <NextButton navigation={navigation} txt="LOG OUT" next="PreLogin" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#C4C4C4",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});

export default SettingsScreen

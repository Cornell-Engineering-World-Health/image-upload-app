import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import NextButton from '../components/nextButton';
import CancelButton from '../components/cancelButton';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <SafeAreaView style={styles.cancelbuttonHeader}>
        <CancelButton navigation={navigation} txt = "<" />
        <Title>Settings</Title>
      </SafeAreaView>
      <NextButton navigation={navigation} txt="ABOUT" next="About" />
      <NextButton navigation={navigation} txt="HELP & SUPPORT" next="Help" />
      <NextButton navigation={navigation} txt="LOG OUT" next="PreLogin"/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#C4C4C4',
    padding: 50,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  cancelbuttonHeader: {
    flexDirection: "row",
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },
});

export default SettingsScreen;

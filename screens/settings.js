import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import NextButton from '../components/nextButton';
import BackButton from '../components/backButton';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <BackButton title={'Settings'} navigation={navigation} />
      <NextButton navigation={navigation} txt="ABOUT" next="About" />
      <NextButton navigation={navigation} txt="HELP & SUPPORT" next="Help" />
      <NextButton navigation={navigation} txt="LOG OUT" next="PreLogin" />
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
});

export default SettingsScreen;

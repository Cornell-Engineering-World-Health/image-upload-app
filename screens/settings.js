import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import NextButton from '../components/nextButton';
import BackButton from '../components/backButton';
import LogoutButton from '../components/logoutButton';
import ReportButton from '../components/reportButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/title';

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <BackButton navigation={navigation} />
      <ReportButton navigation={navigation} />
      <Title>Settings</Title>
      <NextButton navigation={navigation} txt="ABOUT" next="About" />
      <NextButton navigation={navigation} txt="HELP & SUPPORT" next="Help" />
      <LogoutButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SettingsScreen;

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancelButton from '../components/cancelButton';

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Title>Help & Support</Title>
      <Text>something</Text>
      <CancelButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HelpScreen;

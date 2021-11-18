import React from 'react';
import { StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Title>About</Title>
      <Text>something</Text>
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

export default AboutScreen;

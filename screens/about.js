import React from 'react';
import { StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancelButton from '../components/cancelButton';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <SafeAreaView style={styles.cancelbuttonHeader}>
        <CancelButton navigation={navigation} txt = '<'/>
        <Title>About</Title>
      </SafeAreaView>
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
  cancelbuttonHeader: {
    flexDirection: "row",
  },
});

export default AboutScreen;

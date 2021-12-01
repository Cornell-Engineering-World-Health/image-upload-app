import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancelButton from '../components/cancelButton';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Title>About</Title>
        <Text style={styles.text}>
          By uploading images through AuroImage you are helping us develop a
          unique device to assist blind and visually impaired individuals.
        </Text>
        <CancelButton navigation={navigation} />
      </View>
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
  view: {
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 20,
  },
});

export default AboutScreen;

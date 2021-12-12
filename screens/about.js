import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';
import Title from '../components/title';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <BackButton navigation={navigation} />
      <View style={styles.view}>
        <Title>About</Title>
        <Text style={styles.text}>
          By uploading images through AuroImage you are helping us develop a
          unique device to assist blind and visually impaired individuals.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    marginTop: '10%',
    marginHorizontal: '7%',
  },
  text: {
    fontSize: 20,
  },
});

export default AboutScreen;

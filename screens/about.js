import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <BackButton title={'About'} navigation={navigation} />
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';
import Title from '../components/title';

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <BackButton navigation={navigation} />
      <View style={styles.view}>
        <Title>Help & Support</Title>
        <Text style={styles.text}>
          Please contact help@aurolabs.com for further assistance. If this is
          concerning a bug, please flag it using the report feature.
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

export default HelpScreen;

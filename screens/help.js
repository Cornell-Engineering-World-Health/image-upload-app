import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <BackButton title={'Help & Support'} navigation={navigation} />
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
    justifyContent: 'center',
  },
  view: {
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 20,
  },
});

export default HelpScreen;

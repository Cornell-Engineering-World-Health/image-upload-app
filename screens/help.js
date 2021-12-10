import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancelButton from '../components/cancelButton';

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <SafeAreaView style={styles.cancelbuttonHeader}>
          <CancelButton navigation={navigation} txt = '<'/>
           <Title>Help & Support</Title>
        </SafeAreaView>
        <Text style={styles.text}>
          Please contact help@aurolabs.com for further assistance. If this is
          concerning a bug, please flag it using the report feature.
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
  cancelbuttonHeader: {
    flexDirection: "row",
  view: {
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 20,
  },
});

export default HelpScreen;

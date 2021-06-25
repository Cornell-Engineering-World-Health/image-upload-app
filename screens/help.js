import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Title from "../components/title";


function HelpScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Title>
        Help & Support
      </Title>
      <Text>
        something
      </Text>
    </View>
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

export default HelpScreen

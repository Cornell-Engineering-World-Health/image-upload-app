import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from "../components/nextButton"
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import Title from "../components/title";
import { StatusBar } from 'expo-status-bar';
import ReportButton from "../components/reportButton";
import Header from "../components/header";
/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Header navigation={navigation} screenName={"Hello!"} />
      <View style={style.container}>
        <Text>Take a picture or select an existing one on your phone to label:</Text>
        <NextButton navigation={navigation} txt="CAPTURE PICTURE" next="Capture" />
        <NextButton navigation={navigation} txt="UPLOAD PICTURE" next="UploadImageScreen" />
      </View>
      <ReportButton navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#DBE7E7',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10
  },
})

export default HomeScreen

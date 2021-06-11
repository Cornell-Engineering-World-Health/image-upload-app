import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NextButton from "../components/nextButton";
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header navigation={navigation} screenName={"Hello!"} />
      <Text>Take a picture or select an existing one on your phone to label:</Text>
      <NextButton navigation={navigation} txt="CAPTURE PICTURE" next="Capture" />
      <NextButton navigation={navigation} txt="UPLOAD PICTURE" next="UploadImageScreen" />
      <ReportButton navigation={navigation} />
    </View>
  );
}

export default HomeScreen
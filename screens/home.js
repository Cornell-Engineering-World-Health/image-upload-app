import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

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
      <Text>Home</Text>
      <Text>Instructions here:</Text>
      <NextButton navigation={navigation} txt="CAPTURE PICTURE" next="Capture" />
      <NextButton navigation={navigation} txt="UPLOAD PICTURE" next="UploadImageScreen" />
    </View>
  );
}
export default HomeScreen
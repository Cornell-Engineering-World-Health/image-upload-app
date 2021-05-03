import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Home Screen
 *  Design (Home-1): 
 * - image upload button
 * - image capture button.
 * - image gallery of uploaded photos thumbnails sorted by date 
 * Requires: on button completion, navigate to upload screen
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <NextButton navigation={navigation} txt="Go to upload" next="Upload" />
    </View>
  );
}
export default HomeScreen
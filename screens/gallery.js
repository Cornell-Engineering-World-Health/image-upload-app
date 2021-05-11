import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Gallery Screen
 *  Design: 
 * - image gallery of uploaded photos thumbnails sorted by date 
 * Requires: on button completion, navigate to upload screen
 */
function GalleryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Image gallery</Text>
    </View>
  );
}
export default GalleryScreen
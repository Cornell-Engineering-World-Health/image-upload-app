import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Upload Screen
 *  Design (Upload-1): 
 * - image at top of screen. 
 * - dynamic search for labels with drop down menu. 
 * - text input for custom labels.
 * - chosen labels bank.  
 * - upload image object button
 */
function UploadScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text>Upload</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default UploadScreen